import { expect } from 'chai'
import { isDictionaryValue } from './dictionary-value.js'

describe('isDictionaryValue', () => {
  it('returns false for undefined', () => {
    expect(isDictionaryValue(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDictionaryValue(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDictionaryValue(() => {})).to.equal(false)
  })

  it('returns true for true', () => {
    expect(isDictionaryValue(true)).to.equal(true)
  })

  it('returns true for false', () => {
    expect(isDictionaryValue(false)).to.equal(true)
  })

  it('returns true for numbers', () => {
    expect(isDictionaryValue(1)).to.equal(true)
  })

  it('returns true for strings', () => {
    expect(isDictionaryValue('test')).to.equal(true)
  })

  it('returns true for an empty array', () => {
    expect(isDictionaryValue([])).to.equal(true)
  })

  it('returns false for an array of undefined', () => {
    expect(isDictionaryValue([undefined])).to.equal(false)
  })

  it('returns false for an array of null', () => {
    expect(isDictionaryValue([null])).to.equal(false)
  })

  it('returns false for an array of functions', () => {
    expect(isDictionaryValue([() => {}])).to.equal(false)
  })

  it('returns true for an array of booleans', () => {
    expect(isDictionaryValue([true, false])).to.equal(true)
  })

  it('returns true for an array of numbers', () => {
    expect(isDictionaryValue([1, 2, 3])).to.equal(true)
  })

  it('returns true for an array of strings', () => {
    expect(isDictionaryValue(['a', 'b', 'c'])).to.equal(true)
  })

  it('returns true for arrays all the way down', () => {
    expect(isDictionaryValue([[['a'], ['b'], ['c']]])).to.equal(true)
  })

  it('returns true for an empty object', () => {
    expect(isDictionaryValue({})).to.equal(true)
  })

  it('returns true for a proper dictionary', () => {
    expect(isDictionaryValue({ a: 1 })).to.equal(true)
  })

  it('returns false if a dictionary includes reserved keys', () => {
    expect(isDictionaryValue({ $a: 1 })).to.equal(false)
  })
})
