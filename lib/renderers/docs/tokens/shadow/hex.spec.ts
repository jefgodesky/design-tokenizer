import { expect } from 'chai'
import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'
import getShadowHex from './hex.js'

describe('getShadowHex', () => {
  it('returns the shadow\'s 24-bit hexadecimal color code', () => {
    const token: DerefShadowToken = { $type: 'shadow', $value: { color: '#000000', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } }
    expect(getShadowHex(token)).to.equal('#000000')
  })

  it('returns the shadow\'s 24+8 bit hexadecimal color code', () => {
    const token: DerefShadowToken = { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } }
    expect(getShadowHex(token)).to.equal('#00000080')
  })
})
