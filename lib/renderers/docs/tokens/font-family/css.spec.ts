import { expect } from 'chai'
import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import getFontFamilyTokenCSS from './css.js'

describe('getFontFamilyTokenCSS', () => {
  it('returns the token\'s CSS', () => {
    const token: DerefFontFamilyToken = { $type: 'fontFamily', $value: 'Helvetica' }
    expect(getFontFamilyTokenCSS(token)).to.equal('"Helvetica"')
  })

  it('returns the token\'s stack as a CSS', () => {
    const token: DerefFontFamilyToken = { $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] }
    expect(getFontFamilyTokenCSS(token)).to.equal('"Helvetica", sans-serif')
  })
})
