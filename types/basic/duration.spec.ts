import { expect } from 'chai'
import { isDuration } from './duration.js'

describe('isDuration', () => {
  it('returns false for undefined', () => {
    expect(isDuration(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDuration(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDuration(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDuration(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDuration(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDuration(1)).to.equal(false)
  })

  it('returns true for a duration in ms', () => {
    expect(isDuration('1ms')).to.equal(true)
  })

  it('returns true for a duration with a decimal in ms', () => {
    expect(isDuration('1.5ms')).to.equal(true)
  })

  it('returns false for a duration not in ms', () => {
    expect(isDuration('1s')).to.equal(false)
  })

  it('returns false for other strings', () => {
    expect(isDuration('nope')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDuration([])).to.equal(false)
  })

  it('returns false for an array of valid dimensions', () => {
    expect(isDuration(['1ms'])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDuration({})).to.equal(false)
  })

  it('returns false for an object with a valid duration property', () => {
    expect(isDuration({ dimension: '1ms' })).to.equal(false)
  })
})
