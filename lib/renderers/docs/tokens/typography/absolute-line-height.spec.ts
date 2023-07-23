import { expect } from 'chai'
import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getTypographyAbsoluteLineHeight from './absolute-line-height.js'

describe('getTypographyAbsoluteLineHeight', () => {
  it('returns the token\'s absolute line height', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(getTypographyAbsoluteLineHeight(token)).to.equal('1.20rem')
  })
})
