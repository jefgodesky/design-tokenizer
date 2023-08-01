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
    expect(swatches).to.equal('<section class="swatches" id="swatches"><section class="swatch color-black" style="background-color: #000000; color: #ffffff;"><h4>color.black</h4><dl><dt>Hex</dt><dd>#000000</dd><dt>RGBA</dt><dd>0, 0, 0, 1</dd><dt>CMYKA</dt><dd>0, 0, 0, 100, 1</dd><dt>HSLA</dt><dd>0°, 0, 0, 1</dd><dt>HSVA</dt><dd>0°, 0, 0, 1</dd></dl></section><section class="swatch color-white" style="background-color: #ffffff; color: #000000;"><h4>color.white</h4><dl><dt>Hex</dt><dd>#ffffff</dd><dt>RGBA</dt><dd>255, 255, 255, 1</dd><dt>CMYKA</dt><dd>0, 0, 0, 0, 1</dd><dt>HSLA</dt><dd>0°, 0, 100, 1</dd><dt>HSVA</dt><dd>0°, 0, 100, 1</dd></dl></section></section>')
  })
})
