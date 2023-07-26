import { expect } from 'chai'
import DerefColorToken from '../../types/tokens/dereferenced/color.js'
import getSwatch from './swatch.js'

describe('getSwatch', () => {
  it('creates a swatch for a color token', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#000000' }
    const swatch = getSwatch('color.black', token)
    expect(swatch).to.equal('<section class="swatch color-black"><h4>color.black</h4><table><tr><th>Hex</th><td>#000000</td></tr><tr><th>RGBA</th><td>0, 0, 0, 1</td></tr><tr><th>CMYKA</th><td>0, 0, 0, 100, 1</td></tr><tr><th>HSLA</th><td>0°, 0, 0, 1</td></tr><tr><th>HSVA</th><td>0°, 0, 0, 1</td></tr></table></section>')
  })

  it('creates a swatch for a different color token', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#ffffff' }
    const swatch = getSwatch('color.white', token)
    expect(swatch).to.equal('<section class="swatch color-white"><h4>color.white</h4><table><tr><th>Hex</th><td>#ffffff</td></tr><tr><th>RGBA</th><td>255, 255, 255, 1</td></tr><tr><th>CMYKA</th><td>0, 0, 0, 0, 1</td></tr><tr><th>HSLA</th><td>0°, 0, 100, 1</td></tr><tr><th>HSVA</th><td>0°, 0, 100, 1</td></tr></table></section>')
  })

  it('uses $description for title if available', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#000000', $description: 'Black' }
    const swatch = getSwatch('color.black', token)
    expect(swatch).to.equal('<section class="swatch color-black"><h4>Black</h4><table><tr><th>Hex</th><td>#000000</td></tr><tr><th>RGBA</th><td>0, 0, 0, 1</td></tr><tr><th>CMYKA</th><td>0, 0, 0, 100, 1</td></tr><tr><th>HSLA</th><td>0°, 0, 0, 1</td></tr><tr><th>HSVA</th><td>0°, 0, 0, 1</td></tr></table></section>')
  })

  it('includes SCSS variable if available', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#000000', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: '_colors.scss', variable: 'black' } } } }
    const swatch = getSwatch('color.black', token)
    expect(swatch).to.equal('<section class="swatch color-black"><h4>color.black</h4><table><tr><th>Hex</th><td>#000000</td></tr><tr><th>RGBA</th><td>0, 0, 0, 1</td></tr><tr><th>CMYKA</th><td>0, 0, 0, 100, 1</td></tr><tr><th>HSLA</th><td>0°, 0, 0, 1</td></tr><tr><th>HSVA</th><td>0°, 0, 0, 1</td></tr><tr><th>SCSS</th><td>$black</td></tr></table></section>')
  })

  it('includes module in SCSS variable if available', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#000000', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: '_colors.scss', module: 'colors', variable: 'black' } } } }
    const swatch = getSwatch('color.black', token)
    expect(swatch).to.equal('<section class="swatch color-black"><h4>color.black</h4><table><tr><th>Hex</th><td>#000000</td></tr><tr><th>RGBA</th><td>0, 0, 0, 1</td></tr><tr><th>CMYKA</th><td>0, 0, 0, 100, 1</td></tr><tr><th>HSLA</th><td>0°, 0, 0, 1</td></tr><tr><th>HSVA</th><td>0°, 0, 0, 1</td></tr><tr><th>SCSS</th><td>colors.$black</td></tr></table></section>')
  })
})
