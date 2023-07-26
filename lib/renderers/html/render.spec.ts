import { expect } from 'chai'
import mock from 'mock-fs'
import { readFileSync } from 'fs'
import DerefTokenList from '../../types/deref-token-list.js'
import Dictionary from '../../types/dictionary.js'
import renderHTML from './render.js'

describe('renderHTML', () => {
  before(() => {
    mock({
      'html/src': {
        'index.html': '<!DOCTYPE html><html><head><title>Test</title></head><body>{{ color.green.hex }}</body></html>'
      },
      'html/dist': {}
    })
  })

  after(() => { mock.restore() })

  it('renders HTML files', () => {
    const list: DerefTokenList = { 'color.green': { $type: 'color', $value: '#008800' } }
    renderHTML(list, { indir: 'html/src', outdir: 'html/dist', verbose: false })
    const actual = readFileSync('html/dist/index.html', { encoding: 'utf8' })
    expect(actual).to.equal('<!DOCTYPE html><html><head><title>Test</title></head><body>#008800</body></html>')
  })

  it('can add to the dictionary', () => {
    const list: DerefTokenList = {}
    const add: Dictionary = { 'color.green.hex': '#008800' }
    renderHTML(list, { indir: 'html/src', outdir: 'html/dist', add, verbose: false })
    const actual = readFileSync('html/dist/index.html', { encoding: 'utf8' })
    expect(actual).to.equal('<!DOCTYPE html><html><head><title>Test</title></head><body>#008800</body></html>')
  })
})
