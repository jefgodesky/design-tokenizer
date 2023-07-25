import { expect } from 'chai'
import DerefTypographyToken from '../../../types/tokens/dereferenced/typography.js'
import getTypographyCSS from './typography.js'

describe('getTypographyCSS', () => {
  it('returns the token\'s CSS', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(getTypographyCSS(token)).to.equal('normal 1rem/1.20rem "Helvetica", sans-serif')
  })

  it('can handle numerical font weights', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 400, letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(getTypographyCSS(token)).to.equal('400 1rem/1.20rem "Helvetica", sans-serif')
  })

  it('includes font style', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontStyle: 'italic', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(getTypographyCSS(token)).to.equal('italic normal 1rem/1.20rem "Helvetica", sans-serif')
  })
})
