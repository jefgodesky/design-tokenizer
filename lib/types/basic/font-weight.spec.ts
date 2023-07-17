import { expect } from 'chai'
import { isFontWeight, fontWeights } from './font-weight.js'

describe('isFontWeight', () => {
  it('returns false for undefined', () => {
    expect(isFontWeight(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isFontWeight(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isFontWeight(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isFontWeight(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isFontWeight(false)).to.equal(false)
  })

  it('returns false for a number less than 1', () => {
    expect(isFontWeight(0)).to.equal(false)
  })

  it('returns false for a number greater than 1000', () => {
    expect(isFontWeight(1001)).to.equal(false)
  })

  it('returns true for a number between 1 and 1000', () => {
    expect(isFontWeight(100)).to.equal(true)
  })

  it('returns true for an allowed string', () => {
    const actual = fontWeights.map(weight => isFontWeight(weight))
    expect(actual.reduce((acc, curr) => acc && curr, true)).to.equal(true)
  })

  it('returns false for other strings', () => {
    expect(isFontWeight('nope')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isFontWeight([])).to.equal(false)
  })

  it('returns false for an array of valid font weights', () => {
    expect(isFontWeight([100, 200, 300])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isFontWeight({})).to.equal(false)
  })

  it('returns false for an object with a valid font weight property', () => {
    expect(isFontWeight({ weight: 100 })).to.equal(false)
  })
})
