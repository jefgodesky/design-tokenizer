import { expect } from 'chai'
import DerefFontFamilyToken from '../../../types/tokens/dereferenced/font-family.js'
import renderFontFamilyToken from './font-family.js'

describe('renderFontFamilyToken', () => {
  it('turns a font family token with a single string into a SCSS variable', () => {
    const token: DerefFontFamilyToken = { $type: 'fontFamily', $value: 'Helvetica' }
    expect(renderFontFamilyToken('sans', token)).to.equal('$sans: "Helvetica";')
  })

  it('turns a font family token with a single generic string into a SCSS variable', () => {
    const token: DerefFontFamilyToken = { $type: 'fontFamily', $value: 'sans-serif' }
    expect(renderFontFamilyToken('sans', token)).to.equal('$sans: sans-serif;')
  })

  it('turns a font family token with a stack into a SCSS variable', () => {
    const token: DerefFontFamilyToken = { $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] }
    expect(renderFontFamilyToken('sans', token)).to.equal('$sans: "Helvetica", sans-serif;')
  })
})
