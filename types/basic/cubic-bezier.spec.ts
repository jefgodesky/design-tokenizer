import { expect } from 'chai'
import { isCubicBezier } from './cubic-bezier.js'

describe('isCubicBezier', () => {
  it('returns false for undefined', () => {
    expect(isCubicBezier(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isCubicBezier(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isCubicBezier(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isCubicBezier(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isCubicBezier(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isCubicBezier(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isCubicBezier('0.5, 0, 1, 1')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isCubicBezier([])).to.equal(false)
  })

  it('returns false for an array that includes undefined', () => {
    expect(isCubicBezier([0, 0, 0, undefined])).to.equal(false)
  })

  it('returns false for an array that includes null', () => {
    expect(isCubicBezier([0, 0, 0, null])).to.equal(false)
  })

  it('returns false for an array that includes functions', () => {
    expect(isCubicBezier([0, 0, 0, () => {}])).to.equal(false)
  })

  it('returns false for an array that includes true', () => {
    expect(isCubicBezier([0, 0, 0, true])).to.equal(false)
  })

  it('returns false for an array that includes false', () => {
    expect(isCubicBezier([0, 0, 0, false])).to.equal(false)
  })

  it('returns false for an array of one number', () => {
    expect(isCubicBezier([0])).to.equal(false)
  })

  it('returns false for an array of two numbers', () => {
    expect(isCubicBezier([0, 0])).to.equal(false)
  })

  it('returns false for an array of three numbers', () => {
    expect(isCubicBezier([0, 0, 0])).to.equal(false)
  })

  it('returns true for an array of four numbers', () => {
    expect(isCubicBezier([0, 0, 0, 0])).to.equal(true)
  })

  it('returns false for an array of five numbers', () => {
    expect(isCubicBezier([0, 0, 0, 0, 0])).to.equal(false)
  })

  it('returns false for an array that contains strings', () => {
    expect(isCubicBezier([0, 0, 0, '0'])).to.equal(false)
  })

  it('returns false for an array that contains arrays', () => {
    expect(isCubicBezier([0, 0, 0, [0]])).to.equal(false)
  })

  it('returns false for an array that contains objects', () => {
    expect(isCubicBezier([0, 0, 0, { val: 0 }])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isCubicBezier({})).to.equal(false)
  })

  it('returns false for an empty object with a property that would be valid', () => {
    expect(isCubicBezier({ bezier: [0, 0, 0, 0] })).to.equal(false)
  })
})
