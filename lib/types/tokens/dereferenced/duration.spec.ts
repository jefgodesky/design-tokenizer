import { expect } from 'chai'
import { isDerefDurationToken } from './duration.js'

describe('isDerefDurationToken', () => {
  it('returns false for undefined', () => {
    expect(isDerefDurationToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefDurationToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefDurationToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefDurationToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefDurationToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefDurationToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefDurationToken('200ms')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefDurationToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefDurationToken({})).to.equal(false)
  })

  it('returns true for an object with $type duration and a valid $value', () => {
    expect(isDerefDurationToken({ $type: 'duration', $value: '200ms' })).to.equal(true)
  })

  it('returns false for an object with $type duration and a reference $value', () => {
    expect(isDerefDurationToken({ $type: 'duration', $value: '{duration.quick}' })).to.equal(false)
  })

  it('returns false for an object with no $type', () => {
    expect(isDerefDurationToken({ $value: '200ms' })).to.equal(false)
  })

  it('returns false for an object with $type other than duration', () => {
    expect(isDerefDurationToken({ $type: 'time', $value: '200ms' })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDerefDurationToken({ $type: 'duration' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDerefDurationToken({ $type: 'fontWeight', $value: 200 })).to.equal(false)
  })
})
