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
    const list: DerefTokenList = { 'color.green': { $type: 'color', $value: '#008800', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: 'scss/modules/_colors.scss', variable: 'green' } } } } }
    renderSCSS(list, false)
    const actual = readFileSync('scss/modules/_colors.scss', { encoding: 'utf8' })
    expect(actual).to.equal('$green: #008800; // color.green')
  })

  it('renders differently prefixed tokens to different files', () => {
    const list: DerefTokenList = {
      'color.green': { $type: 'color', $value: '#008800', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: 'scss/modules/_colors.scss', variable: 'green' } } } },
      'breakpoint.primary': { $type: 'dimension', $value: '40rem', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: 'scss/modules/_breakpoints.scss', variable: 'primary' } } } }
    }
    renderSCSS(list, false)
    const color = readFileSync('scss/modules/_colors.scss', { encoding: 'utf8' })
    const vars = readFileSync('scss/modules/_breakpoints.scss', { encoding: 'utf8' })
    expect(color).to.equal('$green: #008800; // color.green')
    expect(vars).to.equal('$primary: 40rem; // breakpoint.primary')
  })
})
