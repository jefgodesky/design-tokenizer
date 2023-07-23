import { expect } from 'chai'
import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getTypographyLetterSpacing from './letter-spacing.js'

describe('getTypographyLetterSpacing', () => {
  it('returns the token\'s letter spacing', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(getTypographyLetterSpacing(token)).to.equal('0rem')
  })
})
