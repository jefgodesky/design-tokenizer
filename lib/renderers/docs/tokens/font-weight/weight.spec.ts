import { expect } from 'chai'
import DerefFontWeightToken from '../../../../types/tokens/dereferenced/font-weight.js'
import getFontWeight from './weight.js'

describe('getFontWeight', () => {
  it('returns the font weight string', () => {
    const token: DerefFontWeightToken = { $type: 'fontWeight', $value: 'solid' }
    expect(getFontWeight(token)).to.equal('solid')
  })

  it('returns the font weight number as a string', () => {
    const token: DerefFontWeightToken = { $type: 'fontWeight', $value: 400 }
    expect(getFontWeight(token)).to.equal('400')
  })
})
