import { expect } from 'chai'
import getCubicBezier from './cubic-bezier.js'

describe('getCubicBezier', () => {
  it('returns a string representation of the cubic bézier', () => {
    expect(getCubicBezier([0, 0, 0, 0])).to.equal('0, 0, 0, 0')
  })
})
