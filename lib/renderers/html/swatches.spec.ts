import { expect } from 'chai'
import DerefTokenList from '../../types/deref-token-list.js'
import getSwatches from './swatches.js'

describe('getSwatches', () => {
  it('returns a set of swatches for all color tokens in list', () => {
    const list: DerefTokenList = {
      'color.black': { $type: 'color', $value: '#000000' },
      'color.white': { $type: 'color', $value: '#ffffff' },
      'spacing.vertical': { $type: 'dimension', $value: '1rem' }
    }
    const swatches = getSwatches(list)
    expect(swatches).to.equal('<section class="swatches"><section class="swatch color-black" style="background-color: #000000; color: #ffffff;"><h4>color.black</h4><dl><dt>Hex</dt><dd>#000000</dd><dt>RGBA</dt><dd>0, 0, 0, 1</dd><dt>CMYKA</dt><dd>0, 0, 0, 100, 1</dd><dt>HSLA</dt><dd>0°, 0, 0, 1</dd><dt>HSVA</dt><dd>0°, 0, 0, 1</dd></dl></section><section class="swatch color-white" style="background-color: #ffffff; color: #000000;"><h4>color.white</h4><dl><dt>Hex</dt><dd>#ffffff</dd><dt>RGBA</dt><dd>255, 255, 255, 1</dd><dt>CMYKA</dt><dd>0, 0, 0, 0, 1</dd><dt>HSLA</dt><dd>0°, 0, 100, 1</dd><dt>HSVA</dt><dd>0°, 0, 100, 1</dd></dl></section></section>')
  })

  it('returns a set of swatches for a subtree of color tokens in list', () => {
    const list: DerefTokenList = {
      'color.primary.red': { $type: 'color', $value: '#ff0000' },
      'color.primary.green': { $type: 'color', $value: '#00ff00' },
      'color.primary.blue': { $type: 'color', $value: '#0000ff' },
      'color.secondary.yellow': { $type: 'color', $value: '#ffff00' },
      'color.secondary.magenta': { $type: 'color', $value: '#ff00ff' },
      'color.secondary.cyan': { $type: 'color', $value: '#00ffff' },
      'spacing.vertical': { $type: 'dimension', $value: '1rem' }
    }
    const swatches = getSwatches(list, 'color.primary')
    expect(swatches).to.equal('<section class="swatches"><section class="swatch color-primary-red" style="background-color: #ff0000; color: #000000;"><h4>color.primary.red</h4><dl><dt>Hex</dt><dd>#ff0000</dd><dt>RGBA</dt><dd>255, 0, 0, 1</dd><dt>CMYKA</dt><dd>0, 100, 100, 0, 1</dd><dt>HSLA</dt><dd>0°, 100, 50, 1</dd><dt>HSVA</dt><dd>0°, 100, 100, 1</dd></dl></section><section class="swatch color-primary-green" style="background-color: #00ff00; color: #000000;"><h4>color.primary.green</h4><dl><dt>Hex</dt><dd>#00ff00</dd><dt>RGBA</dt><dd>0, 255, 0, 1</dd><dt>CMYKA</dt><dd>100, 0, 100, 0, 1</dd><dt>HSLA</dt><dd>120°, 100, 50, 1</dd><dt>HSVA</dt><dd>120°, 100, 100, 1</dd></dl></section><section class="swatch color-primary-blue" style="background-color: #0000ff; color: #ffffff;"><h4>color.primary.blue</h4><dl><dt>Hex</dt><dd>#0000ff</dd><dt>RGBA</dt><dd>0, 0, 255, 1</dd><dt>CMYKA</dt><dd>100, 100, 0, 0, 1</dd><dt>HSLA</dt><dd>240°, 100, 50, 1</dd><dt>HSVA</dt><dd>240°, 100, 100, 1</dd></dl></section></section>')
  })
})
