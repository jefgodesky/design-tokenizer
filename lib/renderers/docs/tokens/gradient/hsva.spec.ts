import { expect } from 'chai'
import DerefGradientToken from '../../../../types/tokens/dereferenced/gradient.js'
import getGradientHSVA from './hsva.js'

describe('getGradientHSVA', () => {
  const token: DerefGradientToken = {
    $type: 'gradient',
    $value: [
      { color: '#000000', position: 0 },
      { color: '#ffffff', position: 1 }
    ]
  }

  it('returns the first HSVA if given no index', () => {
    expect(getGradientHSVA(token)).to.equal('0°, 0, 0, 1')
  })

  it('returns the HSVA specified', () => {
    expect(getGradientHSVA(token, 1)).to.equal('0°, 0, 100, 1')
  })
})
