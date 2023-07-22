import { expect } from 'chai'
import DerefGradientToken from '../../../../types/tokens/dereferenced/gradient.js'
import getGradientRGBA from './rgba.js'

describe('getGradientRGBA', () => {
  const token: DerefGradientToken = {
    $type: 'gradient',
    $value: [
      { color: '#000000', position: 0 },
      { color: '#ffffff', position: 1 }
    ]
  }

  it('returns the first RGBA if given no index', () => {
    expect(getGradientRGBA(token)).to.equal('0, 0, 0, 1')
  })

  it('returns the RGBA specified', () => {
    expect(getGradientRGBA(token, 1)).to.equal('255, 255, 255, 1')
  })
})
