import { expect } from 'chai'
import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'
import getShadowRGBA from './rgba.js'

describe('getShadowRGBA', () => {
  it('returns the shadow\'s RGBA color', () => {
    const token: DerefShadowToken = { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } }
    expect(getShadowRGBA(token)).to.equal('0, 0, 0, 0.5')
  })
})
