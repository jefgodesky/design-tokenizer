import { expect } from 'chai'
import mock from 'mock-fs'
import { readFileSync } from 'fs'
import DerefTokenList from '../../types/deref-token-list.js'
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
    renderHTML(list, 'html/src', 'html/dist', false)
    const actual = readFileSync('html/dist/index.html', { encoding: 'utf8' })
    expect(actual).to.equal('<!DOCTYPE html><html><head><title>Test</title></head><body>#008800</body></html>')
  })
})
