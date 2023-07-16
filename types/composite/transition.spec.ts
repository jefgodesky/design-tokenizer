import { expect } from 'chai'
import { isTransition } from './transition.js'

describe('isTransition', () => {
  it('returns false for undefined', () => {
    expect(isTransition(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isTransition(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isTransition(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isTransition(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isTransition(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isTransition(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isTransition('margin-right 2s')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isTransition([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isTransition({})).to.equal(false)
  })

  it('returns true for an object with duration, delay, and timingFunction', () => {
    expect(isTransition({ duration: '200ms', delay: '0ms', timingFunction: [0.5, 0, 1, 1] })).to.equal(true)
  })

  it('returns false if object has no duration', () => {
    expect(isTransition({ delay: '0ms', timingFunction: [0.5, 0, 1, 1] })).to.equal(false)
  })

  it('returns false if duration is invalid', () => {
    expect(isTransition({ duration: '1s', delay: '0ms', timingFunction: [0.5, 0, 1, 1] })).to.equal(false)
  })

  it('returns false if object has no delay', () => {
    expect(isTransition({ duration: '200ms', timingFunction: [0.5, 0, 1, 1] })).to.equal(false)
  })

  it('returns false if delay is invalid', () => {
    expect(isTransition({ duration: '200ms', delay: '0s', timingFunction: [0.5, 0, 1, 1] })).to.equal(false)
  })

  it('returns false if object has no timingFunction', () => {
    expect(isTransition({ duration: '200ms', delay: '0ms' })).to.equal(false)
  })

  it('returns false if timingFunction is invalid', () => {
    expect(isTransition({ duration: '200ms', delay: '0ms', timingFunction: ['0.5', 0, 1, 1] })).to.equal(false)
  })
})
