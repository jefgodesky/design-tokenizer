import { expect } from 'chai'
import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'
import getShadowBlur from './blur.js'

describe('getShadowBlur', () => {
  it('returns the shadow\'s blur', () => {
    const token: DerefShadowToken = { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } }
    expect(getShadowBlur(token)).to.equal('1.5rem')
  })
})
