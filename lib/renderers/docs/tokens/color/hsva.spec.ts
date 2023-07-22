import { expect } from 'chai'
import DerefColorToken from '../../../../types/tokens/dereferenced/color.js'
import getColorHSVA from './hsva.js'

describe('getColorHSVA', () => {
  it('returns an HSVA string for the color', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#008800' }
    expect(getColorHSVA(token)).to.equal('120º, 100, 53, 1')
  })
})
