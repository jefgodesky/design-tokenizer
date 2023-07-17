import { expect } from 'chai'
import { isDerefTransitionToken } from './transition.js'

describe('isDerefTransitionToken', () => {
  const $value = { duration: '200ms', delay: '0ms', timingFunction: [0, 0, 0, 0] }

  it('returns false for undefined', () => {
    expect(isDerefTransitionToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefTransitionToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefTransitionToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefTransitionToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefTransitionToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefTransitionToken(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefTransitionToken('200ms 0 0 0 0 0ms')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefTransitionToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefTransitionToken({})).to.equal(false)
  })

  it('returns true for an object with $type transition and a valid $value', () => {
    expect(isDerefTransitionToken({ $type: 'transition', $value })).to.equal(true)
  })

  it('returns false for an object with $type transition and a reference $value', () => {
    expect(isDerefTransitionToken({ $type: 'transition', $value: '{transition.test}' })).to.equal(false)
  })

  it('returns false for an object with no $type', () => {
    expect(isDerefTransitionToken({ $value })).to.equal(false)
  })

  it('returns false for an object with $type other than transition', () => {
    expect(isDerefTransitionToken({ $type: 'transform', $value })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDerefTransitionToken({ $type: 'transition' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDerefTransitionToken({ $type: 'border', $value: '200ms 0 0 0 0 0ms' })).to.equal(false)
  })
})
