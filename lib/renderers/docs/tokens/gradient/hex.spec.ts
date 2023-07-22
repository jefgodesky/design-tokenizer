import { expect } from 'chai'
import DerefGradientToken from '../../../../types/tokens/dereferenced/gradient.js'
import getGradientHex from './hex.js'

describe('getGradientHex', () => {
  const basic: DerefGradientToken = {
    $type: 'gradient',
    $value: [
      { color: '#000000', position: 0 },
      { color: '#ffffff', position: 1 }
    ]
  }

  const expanded: DerefGradientToken = {
    $type: 'gradient',
    $value: [
      { color: '#000000ff', position: 0 },
      { color: '#ffffffff', position: 1 }
    ]
  }

  it('returns the first 24-bit color hex if given no index', () => {
    expect(getGradientHex(basic)).to.equal('#000000')
  })

  it('returns the first 24+8 bit color hex if given no index', () => {
    expect(getGradientHex(expanded)).to.equal('#000000ff')
  })

  it('returns the 24-bit color hex specified', () => {
    expect(getGradientHex(basic, 1)).to.equal('#ffffff')
  })

  it('returns the 24+8 bit color hex specific', () => {
    expect(getGradientHex(expanded, 1)).to.equal('#ffffffff')
  })
})
