import { expect } from 'chai'
import getCubicBezierURL from './url.js'

describe('getCubicBezierURL', () => {
  it('returns a URL link to cubic-bezier.com', () => {
    expect(getCubicBezierURL([0, 0, 0, 0])).to.equal('https://cubic-bezier.com/#0,0,0,0')
  })
})
