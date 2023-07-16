import { expect } from 'chai'
import { isTransitionToken } from './transition.js'

describe('isTransitionToken', () => {
  const $value = { duration: '200ms', delay: '0ms', timingFunction: [0, 0, 0, 0] }

  it('returns false for undefined', () => {
    expect(isTransitionToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isTransitionToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isTransitionToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isTransitionToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isTransitionToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isTransitionToken(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isTransitionToken('200ms 0 0 0 0 0ms')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isTransitionToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isTransitionToken({})).to.equal(false)
  })

  it('returns true for an object with $type transition and a valid $value', () => {
    expect(isTransitionToken({ $type: 'transition', $value })).to.equal(true)
  })

  it('returns false for an object with no $type', () => {
    expect(isTransitionToken({ $value })).to.equal(false)
  })

  it('returns false for an object with $type other than transition', () => {
    expect(isTransitionToken({ $type: 'transform', $value })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isTransitionToken({ $type: 'transition' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isTransitionToken({ $type: 'border', $value: '200ms 0 0 0 0 0ms' })).to.equal(false)
  })
})
