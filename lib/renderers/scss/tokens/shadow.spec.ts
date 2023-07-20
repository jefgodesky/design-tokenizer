import { expect } from 'chai'
import DerefShadowToken from '../../../types/tokens/dereferenced/shadow.js'
import renderShadowToken from './shadow.js'

describe('renderShadowToken', () => {
  it('renders a shadow token as an SCSS variable', () => {
    const token: DerefShadowToken = { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } }
    expect(renderShadowToken('standard', token)).to.equal('$standard: 0.5rem 0.5rem 1.5rem 0rem #00000080;')
  })
})
