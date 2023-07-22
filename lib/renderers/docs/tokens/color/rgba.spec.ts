import { expect } from 'chai'
import DerefColorToken from '../../../../types/tokens/dereferenced/color.js'
import getColorRGBA from './rgba.js'

describe('getColorRGBA', () => {
  it('returns an RGBA string for the color', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#008800' }
    expect(getColorRGBA(token)).to.equal('0, 136, 0, 1')
  })
})
