import { expect } from 'chai'
import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getTypographyFontWeight from './font-weight.js'

describe('getTypographyFontWeight', () => {
  it('returns the font weight string', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(getTypographyFontWeight(token)).to.equal('normal')
  })

  it('returns the font weight number as a string', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 400, letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(getTypographyFontWeight(token)).to.equal('400')
  })
})
