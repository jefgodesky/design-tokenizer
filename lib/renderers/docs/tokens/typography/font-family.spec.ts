import { expect } from 'chai'
import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getTypographyFontFamily from './font-family.js'

describe('getTypographyFontFamily', () => {
  it('returns the token\'s font family string value', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: 'Helvetica', fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(getTypographyFontFamily(token)).to.equal('Helvetica')
  })

  it('returns the token\'s stack as a string', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(getTypographyFontFamily(token)).to.equal('Helvetica, sans-serif')
  })
})
