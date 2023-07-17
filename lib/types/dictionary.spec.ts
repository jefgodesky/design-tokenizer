import { expect } from 'chai'
import { isDictionary } from './dictionary.js'

describe('Dictionary', () => {
  const dict = { a: 1 }
  const str = 'a'
  const num = 1

  describe('isDictionary', () => {
    it('returns false when given undefined', () => {
      expect(isDictionary(undefined)).to.equal(false)
    })

    it('returns false when given null', () => {
      expect(isDictionary(null)).to.equal(false)
    })

    it('returns false when given a function', () => {
      expect(isDictionary(() => {
      })).to.equal(false)
    })

    it('returns false when given true', () => {
      expect(isDictionary(true)).to.equal(false)
    })

    it('returns false when given false', () => {
      expect(isDictionary(false)).to.equal(false)
    })

    it('returns false when given a number', () => {
      expect(isDictionary(num)).to.equal(false)
    })

    it('returns false when given a string', () => {
      expect(isDictionary(str)).to.equal(false)
    })

    it('returns false when given an array', () => {
      expect(isDictionary([num])).to.equal(false)
    })

    it('returns true when given an empty object', () => {
      expect(isDictionary({})).to.equal(true)
    })

    it('returns false when given an object with an undefined property', () => {
      expect(isDictionary({ prop: undefined })).to.equal(false)
    })

    it('returns false when given an object with a null property', () => {
      expect(isDictionary({ prop: null })).to.equal(false)
    })

    it('returns false when given an object with a function property', () => {
      expect(isDictionary({ prop: () => {} })).to.equal(false)
    })

    it('returns true when given an object with a true property', () => {
      expect(isDictionary({ prop: true })).to.equal(true)
    })

    it('returns true when given an object with a false property', () => {
      expect(isDictionary({ prop: false })).to.equal(true)
    })

    it('returns true when given an object with a number property', () => {
      expect(isDictionary({ num })).to.equal(true)
    })

    it('returns true when given an object with a string property', () => {
      expect(isDictionary({ str })).to.equal(true)
    })

    it('returns true when given an object with an empty array property', () => {
      expect(isDictionary({ arr: [] })).to.equal(true)
    })

    it('returns false when given an object with an array property that includes undefined', () => {
      expect(isDictionary({ arr: [undefined] })).to.equal(false)
    })

    it('returns false when given an object with an array property that includes null', () => {
      expect(isDictionary({ arr: [null] })).to.equal(false)
    })

    it('returns false when given an object with an array property that includes functions', () => {
      expect(isDictionary({ arr: [() => {}] })).to.equal(false)
    })

    it('returns true when given an object with an array property that includes booleans', () => {
      expect(isDictionary({ arr: [true, false] })).to.equal(true)
    })

    it('returns true when given an object with an array property that includes numbers', () => {
      expect(isDictionary({ arr: [1, 2, 3] })).to.equal(true)
    })

    it('returns true when given an object with an array property that includes strings', () => {
      expect(isDictionary({ arr: str.split('') })).to.equal(true)
    })

    it('returns true when given an object with an array property that includes a mix of booleans, numbers, and strings', () => {
      expect(isDictionary({ arr: [true, false, 1, 2, 3, ...str.split('')] })).to.equal(true)
    })

    it('returns true when given an object with an empty object property', () => {
      expect(isDictionary({ prop: {} })).to.equal(true)
    })

    it('returns false when given an object with a property that is an object but not a dictionary', () => {
      expect(isDictionary({ prop: { prop: undefined } })).to.equal(false)
    })

    it('returns true when given an object with a dictionary property', () => {
      expect(isDictionary({ dict })).to.equal(true)
    })

    it('returns false when given a key that starts with $', () => {
      expect(isDictionary({ $value: 1 })).to.equal(false)
    })
  })
})
