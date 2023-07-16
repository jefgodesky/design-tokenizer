import { expect } from 'chai'
import { isHexit } from './color-hex.js'

describe('ColorHex', () => {
  describe('isHexit', () => {
    it('returns false for undefined', () => {
      expect(isHexit(undefined)).to.equal(false)
    })

    it('returns false for null', () => {
      expect(isHexit(null)).to.equal(false)
    })

    it('returns false for functions', () => {
      expect(isHexit(() => {})).to.equal(false)
    })

    it('returns false for true', () => {
      expect(isHexit(true)).to.equal(false)
    })

    it('returns false for false', () => {
      expect(isHexit(false)).to.equal(false)
    })

    it('returns false for numbers', () => {
      expect(isHexit(1)).to.equal(false)
    })

    it('returns true for hexadecimal digits', () => {
      const chars = '0123456789abcdef'.split('')
      const tests = chars.map(char => isHexit(char))
      expect(tests.reduce((acc, curr) => acc && curr, true)).to.equal(true)
    })

    it('returns false for other strings', () => {
      const chars = 'ghijklmnopqrstuvwxyz-/\\?[]{}<>!@#$%^&*()'.split('')
      const tests = chars.map(char => isHexit(char))
      expect(tests.reduce((acc, curr) => acc || curr, false)).to.equal(false)
    })

    it('returns false for an empty array', () => {
      expect(isHexit([])).to.equal(false)
    })

    it('returns false for an array of otherwise valid strings', () => {
      expect(isHexit(['0', '1', '2'])).to.equal(false)
    })

    it('returns false for an empty object', () => {
      expect(isHexit({})).to.equal(false)
    })

    it('returns false for an object with a valid property', () => {
      expect(isHexit({ hex: '0' })).to.equal(false)
    })
  })
})
