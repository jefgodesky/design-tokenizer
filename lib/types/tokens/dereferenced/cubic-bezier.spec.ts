import { expect } from 'chai'
import { isDerefCubicBezierToken } from './cubic-bezier.js'

describe('isDerefCubicBezierToken', () => {
  it('returns false for undefined', () => {
    expect(isDerefCubicBezierToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefCubicBezierToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefCubicBezierToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefCubicBezierToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefCubicBezierToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefCubicBezierToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefCubicBezierToken('0, 0, 0, 0')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefCubicBezierToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefCubicBezierToken({})).to.equal(false)
  })

  it('returns true for an object with $type cubicBezier and a valid $value', () => {
    expect(isDerefCubicBezierToken({ $type: 'cubicBezier', $value: [0, 0, 0, 0] })).to.equal(true)
  })

  it('returns true for an object with $type cubicBezier and a reference $value', () => {
    expect(isDerefCubicBezierToken({ $type: 'cubicBezier', $value: '{curves.flat}' })).to.equal(false)
  })

  it('returns false for an object with no $type', () => {
    expect(isDerefCubicBezierToken({ $value: [0, 0, 0, 0] })).to.equal(false)
  })

  it('returns false for an object with $type other than cubicBezier', () => {
    expect(isDerefCubicBezierToken({ $type: 'cubic-bezier', $value: [0, 0, 0, 0] })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDerefCubicBezierToken({ $type: 'cubicBezier' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDerefCubicBezierToken({ $type: 'cubicBezier', $value: [0, 0, 0, 0, 0] })).to.equal(false)
  })
})
