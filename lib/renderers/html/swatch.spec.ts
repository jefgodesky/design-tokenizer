import { expect } from 'chai'
import DerefColorToken from '../../types/tokens/dereferenced/color.js'
import getSwatch from './swatch.js'

describe('getSwatch', () => {
  it('creates a swatch for a color token', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#000000' }
    const swatch = getSwatch('color.black', token)
    expect(swatch).to.equal('<section class="swatch color-black" style="background-color: #000000; color: #ffffff;"><h4>color.black</h4><dl><dt>Hex</dt><dd>#000000</dd><dt>RGBA</dt><dd>0, 0, 0, 1</dd><dt>CMYKA</dt><dd>0, 0, 0, 100, 1</dd><dt>HSLA</dt><dd>0°, 0, 0, 1</dd><dt>HSVA</dt><dd>0°, 0, 0, 1</dd></dl></section>')
  })

  it('creates a swatch for a different color token', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#ffffff' }
    const swatch = getSwatch('color.white', token)
    expect(swatch).to.equal('<section class="swatch color-white" style="background-color: #ffffff; color: #000000;"><h4>color.white</h4><dl><dt>Hex</dt><dd>#ffffff</dd><dt>RGBA</dt><dd>255, 255, 255, 1</dd><dt>CMYKA</dt><dd>0, 0, 0, 0, 1</dd><dt>HSLA</dt><dd>0°, 0, 100, 1</dd><dt>HSVA</dt><dd>0°, 0, 100, 1</dd></dl></section>')
  })

  it('uses $description for title if available', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#000000', $description: 'Black' }
    const swatch = getSwatch('color.black', token)
    expect(swatch).to.equal('<section class="swatch color-black" style="background-color: #000000; color: #ffffff;"><h4>Black</h4><dl><dt>Hex</dt><dd>#000000</dd><dt>RGBA</dt><dd>0, 0, 0, 1</dd><dt>CMYKA</dt><dd>0, 0, 0, 100, 1</dd><dt>HSLA</dt><dd>0°, 0, 0, 1</dd><dt>HSVA</dt><dd>0°, 0, 0, 1</dd></dl></section>')
  })

  it('includes SCSS variable if available', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#000000', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: '_colors.scss', variable: 'black' } } } }
    const swatch = getSwatch('color.black', token)
    expect(swatch).to.equal('<section class="swatch color-black" style="background-color: #000000; color: #ffffff;"><h4>color.black</h4><dl><dt>Hex</dt><dd>#000000</dd><dt>RGBA</dt><dd>0, 0, 0, 1</dd><dt>CMYKA</dt><dd>0, 0, 0, 100, 1</dd><dt>HSLA</dt><dd>0°, 0, 0, 1</dd><dt>HSVA</dt><dd>0°, 0, 0, 1</dd><dt>SCSS</dt><dd>$black</dd></dl></section>')
  })

  it('includes module in SCSS variable if available', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#000000', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: '_colors.scss', module: 'colors', variable: 'black' } } } }
    const swatch = getSwatch('color.black', token)
    expect(swatch).to.equal('<section class="swatch color-black" style="background-color: #000000; color: #ffffff;"><h4>color.black</h4><dl><dt>Hex</dt><dd>#000000</dd><dt>RGBA</dt><dd>0, 0, 0, 1</dd><dt>CMYKA</dt><dd>0, 0, 0, 100, 1</dd><dt>HSLA</dt><dd>0°, 0, 0, 1</dd><dt>HSVA</dt><dd>0°, 0, 0, 1</dd><dt>SCSS</dt><dd>colors.$black</dd></dl></section>')
  })
})
