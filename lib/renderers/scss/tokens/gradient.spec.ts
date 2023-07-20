import { expect } from 'chai'
import DerefGradientToken from '../../../types/tokens/dereferenced/gradient.js'
import renderGradientToken from './gradient.js'

describe('renderGradientToken', () => {
  it('renders a gradient token as an SCSS variable', () => {
    const token: DerefGradientToken = { $type: 'gradient', $value: [{ color: '#000000', position: 0 }, { color: '#ffffff', position: 1 }] }
    expect(renderGradientToken('monochrome', token)).to.equal('$monochrome: #000000 0%, #ffffff 100%;')
  })
})
