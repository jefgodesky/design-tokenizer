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
    expect(swatches).to.equal('<section class="swatches" id="swatches"><section class="swatch color-black" style="background-color: #000000; color: #ffffff;"><h4>color.black</h4><table><tr><th>Hex</th><td>#000000</td></tr><tr><th>RGBA</th><td>0, 0, 0, 1</td></tr><tr><th>CMYKA</th><td>0, 0, 0, 100, 1</td></tr><tr><th>HSLA</th><td>0°, 0, 0, 1</td></tr><tr><th>HSVA</th><td>0°, 0, 0, 1</td></tr></table></section><section class="swatch color-white" style="background-color: #ffffff; color: #000000;"><h4>color.white</h4><table><tr><th>Hex</th><td>#ffffff</td></tr><tr><th>RGBA</th><td>255, 255, 255, 1</td></tr><tr><th>CMYKA</th><td>0, 0, 0, 0, 1</td></tr><tr><th>HSLA</th><td>0°, 0, 100, 1</td></tr><tr><th>HSVA</th><td>0°, 0, 100, 1</td></tr></table></section></section>')
  })
})
