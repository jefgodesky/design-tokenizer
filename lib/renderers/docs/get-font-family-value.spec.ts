import { expect } from 'chai'
import DerefFontFamilyToken from '../../types/tokens/dereferenced/font-family.js'
import getFontFamilyValue from './get-font-family-value.js'

describe('getFontFamilyValue', () => {
  it('returns the token\'s string value', () => {
    const token: DerefFontFamilyToken = { $type: 'fontFamily', $value: 'Helvetica' }
    expect(getFontFamilyValue(token)).to.equal('Helvetica')
  })

  it('returns the token\'s stack as a string', () => {
    const token: DerefFontFamilyToken = { $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] }
    expect(getFontFamilyValue(token)).to.equal('Helvetica, sans-serif')
  })
})
