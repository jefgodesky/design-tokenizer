import { expect } from 'chai'
import DerefTypographyToken from '../../types/tokens/dereferenced/typography.js'
import getAbsoluteLineHeight from './line-height-absolute.js'

describe('getAbsoluteLineHeight', () => {
  it('returns the absolute line height', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1.2rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.5 } }
    expect(getAbsoluteLineHeight(token)).to.equal('1.80rem')
  })

  it('also works with pixels', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '16px', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.5 } }
    expect(getAbsoluteLineHeight(token)).to.equal('24px')
  })
})
