import { expect } from 'chai'
import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getTypographyFontStyle from './font-style.js'

describe('getTypographyFontStyle', () => {
  it('returns a null string if the token has no font style', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(getTypographyFontStyle(token)).to.equal('')
  })

  it('returns font style if token has it', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontStyle: 'italic', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(getTypographyFontStyle(token)).to.equal('italic')
  })
})
