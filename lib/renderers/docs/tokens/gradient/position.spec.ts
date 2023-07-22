import { expect } from 'chai'
import DerefGradientToken from '../../../../types/tokens/dereferenced/gradient.js'
import getGradientPosition from './position.js'

describe('getGradientPosition', () => {
  const token: DerefGradientToken = {
    $type: 'gradient',
    $value: [
      { color: '#000000', position: 0 },
      { color: '#ffffff', position: 1 }
    ]
  }

  it('returns the first position if given no index', () => {
    expect(getGradientPosition(token)).to.equal('0')
  })

  it('returns the position specified', () => {
    expect(getGradientPosition(token, 1)).to.equal('1')
  })
})
