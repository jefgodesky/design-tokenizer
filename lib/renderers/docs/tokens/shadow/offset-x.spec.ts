import { expect } from 'chai'
import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'
import getShadowOffsetX from './offset-x.js'

describe('getShadowOffsetX', () => {
  it('returns the shadow\'s X offset', () => {
    const token: DerefShadowToken = { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } }
    expect(getShadowOffsetX(token)).to.equal('0.5rem')
  })
})
