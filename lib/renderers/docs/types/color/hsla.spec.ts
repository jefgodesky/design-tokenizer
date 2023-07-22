import { expect } from 'chai'
import getHSLA from './hsla.js'

describe('getHSLA', () => {
  it('returns the HSLA', () => {
    expect(getHSLA('#008800')).to.equal('120°, 100, 27, 1')
  })
})
