import { expect } from 'chai'
import mock from 'mock-fs'
import { readFileSync } from 'fs'
import DerefTokenList from '../../types/deref-token-list.js'
import renderSCSS from './render.js'

describe('renderSCSS', () => {
  before(() => {
    mock({
      'scss/modules': {}
    })
  })

  after(() => { mock.restore() })

  it('renders the tokens to an SCSS file', () => {
    const list: DerefTokenList = { 'color.green': { $type: 'color', $value: '#008800' } }
    renderSCSS(list, { 'color.green': { file: 'scss/modules/_colors.scss' } }, false)
    const actual = readFileSync('scss/modules/_colors.scss', { encoding: 'utf8' })
    expect(actual).to.equal('$color-green: #008800;')
  })

  it('renders differently prefixed tokens to different files', () => {
    const list: DerefTokenList = {
      'color.green': { $type: 'color', $value: '#008800' },
      'breakpoint.primary': { $type: 'dimension', $value: '40rem' }
    }
    renderSCSS(list, {
      color: { file: 'scss/modules/_colors.scss', prefix: { remove: 'color' } },
      '*': { file: 'scss/modules/_variables.scss' }
    }, false)
    const color = readFileSync('scss/modules/_colors.scss', { encoding: 'utf8' })
    const vars = readFileSync('scss/modules/_variables.scss', { encoding: 'utf8' })
    expect(color).to.equal('$green: #008800;')
    expect(vars).to.equal('$breakpoint-primary: 40rem;')
  })
})
