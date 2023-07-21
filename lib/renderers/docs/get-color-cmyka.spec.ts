import { expect } from 'chai'
import DerefColorToken from '../../types/tokens/dereferenced/color.js'
import getColorCMYKA from './get-color-cmyka.js'

describe('getColorCMYKA', () => {
  it('returns a CMYKA string for the color', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#008800' }
    expect(getColorCMYKA(token)).to.equal('100, 0, 100, 47, 1')
  })
})
