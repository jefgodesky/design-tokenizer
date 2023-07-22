import { expect } from 'chai'
import getHex from './hex.js'

describe('getHex', () => {
  it('returns the 24-bit hexadecimal color code', () => {
    expect(getHex('#008800')).to.equal('#008800')
  })

  it('returns the 24+8 bit hexadecimal color code', () => {
    expect(getHex('#008800ff')).to.equal('#008800ff')
  })
})
