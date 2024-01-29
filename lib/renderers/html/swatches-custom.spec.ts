import { expect } from 'chai'
import DerefTokenList from '../../types/deref-token-list.js'
import renderSwatches from './swatches-custom.js'

describe('renderSwatches', () => {
  it('renders custom swatches', () => {
    const list: DerefTokenList = {
      'color.primary.red': { $type: 'color', $value: '#ff0000' },
      'color.primary.green': { $type: 'color', $value: '#00ff00' },
      'color.primary.blue': { $type: 'color', $value: '#0000ff' },
      'color.secondary.yellow': { $type: 'color', $value: '#ffff00' },
      'color.secondary.magenta': { $type: 'color', $value: '#ff00ff' },
      'color.secondary.cyan': { $type: 'color', $value: '#00ffff' },
      'spacing.vertical': { $type: 'dimension', $value: '1rem' }
    }
    const before = '<!DOCTYPE html><html><head><title>Swatches Test</title><body><h1>Primary Colors</h1>{{ swatches.color.primary }}<h1>Secondary Colors</h1>{{ swatches.color.secondary }}</body></head></html>'
    const after = renderSwatches(list, before)
    expect(after).to.equal('<!DOCTYPE html><html><head><title>Swatches Test</title><body><h1>Primary Colors</h1><section class="swatches"><section class="swatch color-primary-red" style="background-color: #ff0000; color: #000000;"><h4>color.primary.red</h4><dl><dt>Hex</dt><dd>#ff0000</dd><dt>RGBA</dt><dd>255, 0, 0, 1</dd><dt>CMYKA</dt><dd>0, 100, 100, 0, 1</dd><dt>HSLA</dt><dd>0°, 100, 50, 1</dd><dt>HSVA</dt><dd>0°, 100, 100, 1</dd></dl></section><section class="swatch color-primary-green" style="background-color: #00ff00; color: #000000;"><h4>color.primary.green</h4><dl><dt>Hex</dt><dd>#00ff00</dd><dt>RGBA</dt><dd>0, 255, 0, 1</dd><dt>CMYKA</dt><dd>100, 0, 100, 0, 1</dd><dt>HSLA</dt><dd>120°, 100, 50, 1</dd><dt>HSVA</dt><dd>120°, 100, 100, 1</dd></dl></section><section class="swatch color-primary-blue" style="background-color: #0000ff; color: #ffffff;"><h4>color.primary.blue</h4><dl><dt>Hex</dt><dd>#0000ff</dd><dt>RGBA</dt><dd>0, 0, 255, 1</dd><dt>CMYKA</dt><dd>100, 100, 0, 0, 1</dd><dt>HSLA</dt><dd>240°, 100, 50, 1</dd><dt>HSVA</dt><dd>240°, 100, 100, 1</dd></dl></section></section><h1>Secondary Colors</h1><section class="swatches"><section class="swatch color-secondary-yellow" style="background-color: #ffff00; color: #000000;"><h4>color.secondary.yellow</h4><dl><dt>Hex</dt><dd>#ffff00</dd><dt>RGBA</dt><dd>255, 255, 0, 1</dd><dt>CMYKA</dt><dd>0, 0, 100, 0, 1</dd><dt>HSLA</dt><dd>60°, 100, 50, 1</dd><dt>HSVA</dt><dd>60°, 100, 100, 1</dd></dl></section><section class="swatch color-secondary-magenta" style="background-color: #ff00ff; color: #000000;"><h4>color.secondary.magenta</h4><dl><dt>Hex</dt><dd>#ff00ff</dd><dt>RGBA</dt><dd>255, 0, 255, 1</dd><dt>CMYKA</dt><dd>0, 100, 0, 0, 1</dd><dt>HSLA</dt><dd>300°, 100, 50, 1</dd><dt>HSVA</dt><dd>300°, 100, 100, 1</dd></dl></section><section class="swatch color-secondary-cyan" style="background-color: #00ffff; color: #000000;"><h4>color.secondary.cyan</h4><dl><dt>Hex</dt><dd>#00ffff</dd><dt>RGBA</dt><dd>0, 255, 255, 1</dd><dt>CMYKA</dt><dd>100, 0, 0, 0, 1</dd><dt>HSLA</dt><dd>180°, 100, 50, 1</dd><dt>HSVA</dt><dd>180°, 100, 100, 1</dd></dl></section></section></body></head></html>')
  })
})
