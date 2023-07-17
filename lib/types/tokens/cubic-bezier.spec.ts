import { expect } from 'chai'
import { isCubicBezierToken } from './cubic-bezier.js'

describe('isCubicBezierToken', () => {
  it('returns false for undefined', () => {
    expect(isCubicBezierToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isCubicBezierToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isCubicBezierToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isCubicBezierToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isCubicBezierToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isCubicBezierToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isCubicBezierToken('0, 0, 0, 0')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isCubicBezierToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isCubicBezierToken({})).to.equal(false)
  })

  it('returns true for an object with $type cubicBezier and a valid $value', () => {
    expect(isCubicBezierToken({ $type: 'cubicBezier', $value: [0, 0, 0, 0] })).to.equal(true)
  })

  it('returns false for an object with no $type', () => {
    expect(isCubicBezierToken({ $value: [0, 0, 0, 0] })).to.equal(false)
  })

  it('returns false for an object with $type other than cubicBezier', () => {
    expect(isCubicBezierToken({ $type: 'cubic-bezier', $value: [0, 0, 0, 0] })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isCubicBezierToken({ $type: 'cubicBezier' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isCubicBezierToken({ $type: 'cubicBezier', $value: [0, 0, 0, 0, 0] })).to.equal(false)
  })
})
