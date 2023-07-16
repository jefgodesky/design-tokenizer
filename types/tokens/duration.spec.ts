import { expect } from 'chai'
import { isDurationToken } from './duration.js'

describe('isDurationToken', () => {
  it('returns false for undefined', () => {
    expect(isDurationToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDurationToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDurationToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDurationToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDurationToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDurationToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDurationToken('200ms')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDurationToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDurationToken({})).to.equal(false)
  })

  it('returns true for an object with $type duration and a valid $value', () => {
    expect(isDurationToken({ $type: 'duration', $value: '200ms' })).to.equal(true)
  })

  it('returns false for an object with no $type', () => {
    expect(isDurationToken({ $value: '200ms' })).to.equal(false)
  })

  it('returns false for an object with $type other than duration', () => {
    expect(isDurationToken({ $type: 'time', $value: '200ms' })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDurationToken({ $type: 'duration' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDurationToken({ $type: 'fontWeight', $value: 200 })).to.equal(false)
  })
})
