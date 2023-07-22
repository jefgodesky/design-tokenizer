import { expect } from 'chai'
import getRGBA from './rgba.js'

describe('getRGBA', () => {
  it('returns the RGBA', () => {
    expect(getRGBA('#008800')).to.equal('0, 136, 0, 1')
  })
})
