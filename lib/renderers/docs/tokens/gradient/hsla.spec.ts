import { expect } from 'chai'
import DerefGradientToken from '../../../../types/tokens/dereferenced/gradient.js'
import getGradientHSLA from './hsla.js'

describe('getGradientHSLA', () => {
  const token: DerefGradientToken = {
    $type: 'gradient',
    $value: [
      { color: '#000000', position: 0 },
      { color: '#ffffff', position: 1 }
    ]
  }

  it('returns the first HSLA if given no index', () => {
    expect(getGradientHSLA(token)).to.equal('0°, 0, 0, 1')
  })

  it('returns the HSLA specified', () => {
    expect(getGradientHSLA(token, 1)).to.equal('0°, 0, 100, 1')
  })
})
