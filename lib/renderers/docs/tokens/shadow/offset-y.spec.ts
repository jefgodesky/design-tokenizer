import { expect } from 'chai'
import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'
import getShadowOffsetY from './offset-y.js'

describe('getShadowOffsetY', () => {
  it('returns the shadow\'s Y offset', () => {
    const token: DerefShadowToken = { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } }
    expect(getShadowOffsetY(token)).to.equal('0.5rem')
  })
})
