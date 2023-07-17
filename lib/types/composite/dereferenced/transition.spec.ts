import { expect } from 'chai'
import { isDerefTransition } from './transition.js'

describe('isDerefTransition', () => {
  it('returns false for undefined', () => {
    expect(isDerefTransition(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefTransition(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefTransition(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefTransition(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefTransition(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefTransition(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefTransition('margin-right 2s')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefTransition([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefTransition({})).to.equal(false)
  })

  it('returns true for an object with duration, delay, and timingFunction', () => {
    expect(isDerefTransition({ duration: '200ms', delay: '0ms', timingFunction: [0.5, 0, 1, 1] })).to.equal(true)
  })

  it('returns false for an object with a duration reference', () => {
    expect(isDerefTransition({ duration: '{duration.quick}', delay: '0ms', timingFunction: [0.5, 0, 1, 1] })).to.equal(false)
  })

  it('returns false for an object with a delay reference', () => {
    expect(isDerefTransition({ duration: '200ms', delay: '{duration.instantaneous}', timingFunction: [0.5, 0, 1, 1] })).to.equal(false)
  })

  it('returns false for an object with a timing function reference', () => {
    expect(isDerefTransition({ duration: '200ms', delay: '0ms', timingFunction: '{timing.transition}' })).to.equal(false)
  })

  it('returns false if object has no duration', () => {
    expect(isDerefTransition({ delay: '0ms', timingFunction: [0.5, 0, 1, 1] })).to.equal(false)
  })

  it('returns false if duration is invalid', () => {
    expect(isDerefTransition({ duration: '1s', delay: '0ms', timingFunction: [0.5, 0, 1, 1] })).to.equal(false)
  })

  it('returns false if object has no delay', () => {
    expect(isDerefTransition({ duration: '200ms', timingFunction: [0.5, 0, 1, 1] })).to.equal(false)
  })

  it('returns false if delay is invalid', () => {
    expect(isDerefTransition({ duration: '200ms', delay: '0s', timingFunction: [0.5, 0, 1, 1] })).to.equal(false)
  })

  it('returns false if object has no timingFunction', () => {
    expect(isDerefTransition({ duration: '200ms', delay: '0ms' })).to.equal(false)
  })

  it('returns false if timingFunction is invalid', () => {
    expect(isDerefTransition({ duration: '200ms', delay: '0ms', timingFunction: ['0.5', 0, 1, 1] })).to.equal(false)
  })
})
