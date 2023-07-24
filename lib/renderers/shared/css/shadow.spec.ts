import { expect } from 'chai'
import DerefShadowToken from '../../../types/tokens/dereferenced/shadow.js'
import getShadowCSS from './shadow.js'

describe('getShadowCSS', () => {
  const token: DerefShadowToken = { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } }

  it('returns the CSS for a shadow token', () => {
    expect(getShadowCSS(token)).to.equal('0.5rem 0.5rem 1.5rem 0rem #00000080')
  })
})
