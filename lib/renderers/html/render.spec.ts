import { expect } from 'chai'
import esmock from 'esmock'
import { fs as memfs, vol } from 'memfs'
import DerefTokenList from '../../types/deref-token-list.js'
import Dictionary from '../../types/dictionary.js'

describe('renderHTML', () => {
  let renderHTML: Function

  beforeEach(async () => {
    vol.fromJSON({
      '/html/src/index.html': '<!DOCTYPE html><html><head><title>Test</title></head><body>{{ color.green.hex }}</body></html>',
      '/html/src/swatches.html': '<!DOCTYPE html><html><head><title>Swatches Test</title><body><h1>Primary Colors</h1>{{ swatches.color.primary }}<h1>Secondary Colors</h1>{{ swatches.color.secondary }}</body></head></html>'
    })
    memfs.mkdirSync('/html/dist', { recursive: true })
    renderHTML = await esmock('./render.js', {
      fs: memfs
    })
  })

  afterEach(() => { vol.reset() })

  it('renders HTML files', () => {
    const list: DerefTokenList = { 'color.green': { $type: 'color', $value: '#008800' } }
    renderHTML(list, { indir: '/html/src', outdir: '/html/dist', verbose: false, base: '/' })
    const actual = memfs.readFileSync('/html/dist/index.html', { encoding: 'utf8' })
    expect(actual).to.equal('<!DOCTYPE html><html><head><title>Test</title></head><body>#008800</body></html>')
  })

  it('can add to the dictionary', () => {
    const list: DerefTokenList = {}
    const add: Dictionary = { 'color.green.hex': '#008800' }
    renderHTML(list, { indir: '/html/src', outdir: '/html/dist', add, verbose: false, base: '/' })
    const actual = memfs.readFileSync('/html/dist/index.html', { encoding: 'utf8' })
    expect(actual).to.equal('<!DOCTYPE html><html><head><title>Test</title></head><body>#008800</body></html>')
  })

  it('can render custom swatch sets', () => {
    const list: DerefTokenList = {
      'color.primary.red': { $type: 'color', $value: '#ff0000' },
      'color.primary.green': { $type: 'color', $value: '#00ff00' },
      'color.primary.blue': { $type: 'color', $value: '#0000ff' },
      'color.secondary.yellow': { $type: 'color', $value: '#ffff00' },
      'color.secondary.magenta': { $type: 'color', $value: '#ff00ff' },
      'color.secondary.cyan': { $type: 'color', $value: '#00ffff' },
      'spacing.vertical': { $type: 'dimension', $value: '1rem' }
    }
    renderHTML(list, { indir: '/html/src', outdir: '/html/dist', verbose: false, base: '/' })
    const actual = memfs.readFileSync('/html/dist/swatches.html', { encoding: 'utf8' })
    expect(actual).to.equal('<!DOCTYPE html><html><head><title>Swatches Test</title><body><h1>Primary Colors</h1><section class="swatches"><section class="swatch color-primary-red" style="background-color: #ff0000; color: #000000;"><h4>color.primary.red</h4><dl><dt>Hex</dt><dd>#ff0000</dd><dt>RGBA</dt><dd>255, 0, 0, 1</dd><dt>CMYKA</dt><dd>0, 100, 100, 0, 1</dd><dt>HSLA</dt><dd>0°, 100, 50, 1</dd><dt>HSVA</dt><dd>0°, 100, 100, 1</dd></dl></section><section class="swatch color-primary-green" style="background-color: #00ff00; color: #000000;"><h4>color.primary.green</h4><dl><dt>Hex</dt><dd>#00ff00</dd><dt>RGBA</dt><dd>0, 255, 0, 1</dd><dt>CMYKA</dt><dd>100, 0, 100, 0, 1</dd><dt>HSLA</dt><dd>120°, 100, 50, 1</dd><dt>HSVA</dt><dd>120°, 100, 100, 1</dd></dl></section><section class="swatch color-primary-blue" style="background-color: #0000ff; color: #ffffff;"><h4>color.primary.blue</h4><dl><dt>Hex</dt><dd>#0000ff</dd><dt>RGBA</dt><dd>0, 0, 255, 1</dd><dt>CMYKA</dt><dd>100, 100, 0, 0, 1</dd><dt>HSLA</dt><dd>240°, 100, 50, 1</dd><dt>HSVA</dt><dd>240°, 100, 100, 1</dd></dl></section></section><h1>Secondary Colors</h1><section class="swatches"><section class="swatch color-secondary-yellow" style="background-color: #ffff00; color: #000000;"><h4>color.secondary.yellow</h4><dl><dt>Hex</dt><dd>#ffff00</dd><dt>RGBA</dt><dd>255, 255, 0, 1</dd><dt>CMYKA</dt><dd>0, 0, 100, 0, 1</dd><dt>HSLA</dt><dd>60°, 100, 50, 1</dd><dt>HSVA</dt><dd>60°, 100, 100, 1</dd></dl></section><section class="swatch color-secondary-magenta" style="background-color: #ff00ff; color: #000000;"><h4>color.secondary.magenta</h4><dl><dt>Hex</dt><dd>#ff00ff</dd><dt>RGBA</dt><dd>255, 0, 255, 1</dd><dt>CMYKA</dt><dd>0, 100, 0, 0, 1</dd><dt>HSLA</dt><dd>300°, 100, 50, 1</dd><dt>HSVA</dt><dd>300°, 100, 100, 1</dd></dl></section><section class="swatch color-secondary-cyan" style="background-color: #00ffff; color: #000000;"><h4>color.secondary.cyan</h4><dl><dt>Hex</dt><dd>#00ffff</dd><dt>RGBA</dt><dd>0, 255, 255, 1</dd><dt>CMYKA</dt><dd>100, 0, 0, 0, 1</dd><dt>HSLA</dt><dd>180°, 100, 50, 1</dd><dt>HSVA</dt><dd>180°, 100, 100, 1</dd></dl></section></section></body></head></html>')
  })
})
