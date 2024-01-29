import { expect } from 'chai'
import esmock from 'esmock'
import { fs as memfs, vol } from 'memfs'
import DerefTokenList from '../../types/deref-token-list.js'

describe('renderSCSS', () => {
  let renderSCSS: Function

  beforeEach(async () => {
    memfs.mkdirSync('/scss/modules', { recursive: true })
    renderSCSS = await esmock('./render.js', {
      fs: memfs
    })
  })

  afterEach(() => { vol.reset() })

  it('renders the tokens to an SCSS file', () => {
    const list: DerefTokenList = { 'color.green': { $type: 'color', $value: '#008800', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: 'scss/modules/_colors.scss', variable: 'green' } } } } }
    renderSCSS(list, false, '/')
    const actual = memfs.readFileSync('/scss/modules/_colors.scss', { encoding: 'utf8' })
    expect(actual).to.equal('$green: #008800; // color.green')
  })

  it('can render to different files', () => {
    const list: DerefTokenList = {
      'color.green': { $type: 'color', $value: '#008800', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: 'scss/modules/_colors.scss', variable: 'green' } } } },
      'breakpoint.primary': { $type: 'dimension', $value: '40rem', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: 'scss/modules/_breakpoints.scss', variable: 'primary' } } } }
    }
    renderSCSS(list, false, '/')
    const color = memfs.readFileSync('/scss/modules/_colors.scss', { encoding: 'utf8' })
    const vars = memfs.readFileSync('/scss/modules/_breakpoints.scss', { encoding: 'utf8' })
    expect(color).to.equal('$green: #008800; // color.green')
    expect(vars).to.equal('$primary: 40rem; // breakpoint.primary')
  })
})
