import { expect } from 'chai'
import { isDimension } from './dimension.js'

describe('isDimension', () => {
  it('returns false for undefined', () => {
    expect(isDimension(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDimension(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDimension(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDimension(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDimension(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDimension(1)).to.equal(false)
  })

  it('returns true for a dimension in rems', () => {
    expect(isDimension('1rem')).to.equal(true)
  })

  it('returns true for a dimension with a decimal in rems', () => {
    expect(isDimension('1.5rem')).to.equal(true)
  })

  it('returns true for a dimension in pixels', () => {
    expect(isDimension('1px')).to.equal(true)
  })

  it('returns true for a dimension with a decimal in pixels', () => {
    expect(isDimension('1.5px')).to.equal(true)
  })

  it('returns false for a dimension in units other than pixels or rems', () => {
    expect(isDimension('1em')).to.equal(false)
  })

  it('returns false for other strings', () => {
    expect(isDimension('nope')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDimension([])).to.equal(false)
  })

  it('returns false for an array of valid dimensions', () => {
    expect(isDimension(['1rem'])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDimension({})).to.equal(false)
  })

  it('returns false for an object with a valid dimension property', () => {
    expect(isDimension({ dimension: '1rem' })).to.equal(false)
  })
})
