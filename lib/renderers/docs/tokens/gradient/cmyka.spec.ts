import { expect } from 'chai'
import DerefGradientToken from '../../../../types/tokens/dereferenced/gradient.js'
import getGradientCMYKA from './cmyka.js'

describe('getGradientCMYKA', () => {
  const token: DerefGradientToken = {
    $type: 'gradient',
    $value: [
      { color: '#000000', position: 0 },
      { color: '#ffffff', position: 1 }
    ]
  }

  it('returns the first CMYK if given no index', () => {
    expect(getGradientCMYKA(token)).to.equal('0, 0, 0, 100, 1')
  })

  it('returns the CMYKA specified', () => {
    expect(getGradientCMYKA(token, 1)).to.equal('0, 0, 0, 0, 1')
  })
})
