import { expect } from 'chai'
import DerefColorToken from '../../../../types/tokens/dereferenced/color.js'
import getColorHex from './hex.js'

describe('getColorHex', () => {
  it('returns hex from color token', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#008800' }
    expect(getColorHex(token)).to.equal('#008800')
  })

  it('returns 24+8 bit hex from color token that has it', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#008800ff' }
    expect(getColorHex(token)).to.equal('#008800ff')
  })
})
