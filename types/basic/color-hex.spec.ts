import { expect } from 'chai'
import { isHexit, isColorHex } from './color-hex.js'

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

  describe('isColorHex', () => {
    it('returns false for undefined', () => {
      expect(isColorHex(undefined)).to.equal(false)
    })

    it('returns false for null', () => {
      expect(isColorHex(null)).to.equal(false)
    })

    it('returns false for functions', () => {
      expect(isColorHex(() => {})).to.equal(false)
    })

    it('returns false for true', () => {
      expect(isColorHex(true)).to.equal(false)
    })

    it('returns false for false', () => {
      expect(isColorHex(false)).to.equal(false)
    })

    it('returns false for numbers', () => {
      expect(isColorHex(1)).to.equal(false)
    })

    it('returns true for a 24 bit hexadecimal RGB value', () => {
      expect(isColorHex('#ff0000')).to.equal(true)
    })

    it('returns true for a 24+8 bit hexadecimal RGB value', () => {
      expect(isColorHex('#ff0000ff')).to.equal(true)
    })

    it('returns false for a 12 bit hexadecimal RGB value', () => {
      expect(isColorHex('#f00')).to.equal(false)
    })

    it('returns false for a string that doesn\'t begin with an octothorpe', () => {
      expect(isColorHex('ff0000')).to.equal(false)
    })

    it('returns false for a string that isn\'t a hexadecimal value', () => {
      expect(isColorHex('#ffgghh')).to.equal(false)
    })

    it('returns false for any other string', () => {
      expect(isColorHex('red')).to.equal(false)
    })

    it('returns false for an empty array', () => {
      expect(isColorHex([])).to.equal(false)
    })

    it('returns false for an array of otherwise valid items', () => {
      expect(isColorHex(['#ff0000'])).to.equal(false)
    })

    it('returns false for an empty object', () => {
      expect(isColorHex({})).to.equal(false)
    })

    it('returns false for an object with a valid property', () => {
      expect(isColorHex({ color: '#ff0000' })).to.equal(false)
    })
  })
})
