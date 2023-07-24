import { expect } from 'chai'
import DerefGradientToken from '../../../types/tokens/dereferenced/gradient.js'
import getGradientCSS from './gradient.js'

describe('getGradientCSS', () => {
  it('returns the CSS for a gradient', () => {
    const monochrome: DerefGradientToken = { $type: 'gradient', $value: [{ color: '#000000', position: 0 }, { color: '#ffffff', position: 1 }] }
    expect(getGradientCSS(monochrome)).to.equal('#000000 0%, #ffffff 100%')
  })
})
