import { expect } from 'chai'
import DerefColorToken from '../../types/tokens/dereferenced/color.js'
import getColorHSLA from './get-color-hsla.js'

describe('getColorHSLA', () => {
  it('returns an HSLA string for the color', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#008800' }
    expect(getColorHSLA(token)).to.equal('120º, 100, 27, 1')
  })
})