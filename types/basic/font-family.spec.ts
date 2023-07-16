import { expect } from 'chai'
import { isFontFamily } from './font-family.js'

describe('isFontFamily', () => {
  it('returns false for undefined', () => {
    expect(isFontFamily(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isFontFamily(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isFontFamily(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isFontFamily(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isFontFamily(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isFontFamily(1)).to.equal(false)
  })

  it('returns true for strings', () => {
    expect(isFontFamily('Helvetica')).to.equal(true)
  })

  it('returns true for empty arrays', () => {
    expect(isFontFamily([])).to.equal(true)
  })

  it('returns false for arrays with undefined', () => {
    expect(isFontFamily([undefined])).to.equal(false)
  })

  it('returns false for arrays with null', () => {
    expect(isFontFamily([null])).to.equal(false)
  })

  it('returns false for arrays of functions', () => {
    expect(isFontFamily([() => {}])).to.equal(false)
  })

  it('returns false for arrays of booleans', () => {
    expect(isFontFamily([true, false])).to.equal(false)
  })

  it('returns false for arrays of numbers', () => {
    expect(isFontFamily([1, 2, 3])).to.equal(false)
  })

  it('returns true for arrays of strings', () => {
    expect(isFontFamily(['Helvetica', 'sans-serif'])).to.equal(true)
  })

  it('returns false for arrays of arrays', () => {
    expect(isFontFamily([[]])).to.equal(false)
  })

  it('returns false for arrays of objects', () => {
    expect(isFontFamily([{}])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isFontFamily({})).to.equal(false)
  })

  it('returns false for objects with valid properties', () => {
    expect(isFontFamily({ value: 'Helvetica' })).to.equal(false)
  })
})
