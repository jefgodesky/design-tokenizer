import { expect } from 'chai'
import TokenType, { getTokenTypes, isTokenType } from './token-type.js'

describe('TokenType', () => {
  describe('values', () => {
    it('includes color', () => {
      expect(TokenType.color).to.equal('color')
    })

    it('includes dimension', () => {
      expect(TokenType.dimension).to.equal('dimension')
    })

    it('includes duration', () => {
      expect(TokenType.duration).to.equal('duration')
    })

    it('includes font family', () => {
      expect(TokenType.font.family).to.equal('fontFamily')
    })

    it('includes font weight', () => {
      expect(TokenType.font.weight).to.equal('fontWeight')
    })

    it('includes cubic bezier', () => {
      expect(TokenType.cubicBezier).to.equal('cubicBezier')
    })

    it('includes number', () => {
      expect(TokenType.number).to.equal('number')
    })

    it('includes strokeStyle', () => {
      expect(TokenType.strokeStyle).to.equal('strokeStyle')
    })

    it('includes border', () => {
      expect(TokenType.border).to.equal('border')
    })

    it('includes transition', () => {
      expect(TokenType.transition).to.equal('transition')
    })

    it('includes shadow', () => {
      expect(TokenType.shadow).to.equal('shadow')
    })

    it('includes gradient', () => {
      expect(TokenType.gradient).to.equal('gradient')
    })

    it('includes typography', () => {
      expect(TokenType.typography).to.equal('typography')
    })
  })

  describe('getTokenTypes', () => {
    it('returns an array that includes the string "color"', () => {
      expect(getTokenTypes()).to.include('color')
    })

    it('returns an array that includes the string "dimension"', () => {
      expect(getTokenTypes()).to.include('dimension')
    })

    it('returns an array that includes the string "duration"', () => {
      expect(getTokenTypes()).to.include('duration')
    })

    it('returns an array that includes the string "fontFamily"', () => {
      expect(getTokenTypes()).to.include('fontFamily')
    })

    it('returns an array that includes the string "fontWeight"', () => {
      expect(getTokenTypes()).to.include('fontWeight')
    })

    it('returns an array that includes the string "cubicBezier"', () => {
      expect(getTokenTypes()).to.include('cubicBezier')
    })

    it('returns an array that includes the string "number"', () => {
      expect(getTokenTypes()).to.include('number')
    })

    it('returns an array that includes the string "strokeStyle"', () => {
      expect(getTokenTypes()).to.include('strokeStyle')
    })

    it('returns an array that includes the string "border"', () => {
      expect(getTokenTypes()).to.include('border')
    })

    it('returns an array that includes the string "transition"', () => {
      expect(getTokenTypes()).to.include('transition')
    })

    it('returns an array that includes the string "shadow"', () => {
      expect(getTokenTypes()).to.include('shadow')
    })

    it('returns an array that includes the string "gradient"', () => {
      expect(getTokenTypes()).to.include('gradient')
    })

    it('returns an array that includes the string "typography"', () => {
      expect(getTokenTypes()).to.include('typography')
    })

    it('returns an array with no other values', () => {
      expect(getTokenTypes()).to.have.length(13)
    })
  })

  describe('isTokenType', () => {
    it('returns false when given null', () => {
      expect(isTokenType(null)).to.equal(false)
    })

    it('returns false when given true', () => {
      expect(isTokenType(true)).to.equal(false)
    })

    it('returns false when given false', () => {
      expect(isTokenType(false)).to.equal(false)
    })

    it('returns false when given a number', () => {
      expect(isTokenType(1)).to.equal(false)
    })

    it('returns false when given a function', () => {
      expect(isTokenType(() => {})).to.equal(false)
    })

    it('returns true when given the string "color"', () => {
      expect(isTokenType('color')).to.equal(true)
    })

    it('returns true when given the string "dimension"', () => {
      expect(isTokenType('dimension')).to.equal(true)
    })

    it('returns true when given the string "duration"', () => {
      expect(isTokenType('duration')).to.equal(true)
    })

    it('returns true when given the string "fontFamily"', () => {
      expect(isTokenType('fontFamily')).to.equal(true)
    })

    it('returns true when given the string "fontWeight"', () => {
      expect(isTokenType('fontWeight')).to.equal(true)
    })

    it('returns true when given the string "cubicBezier"', () => {
      expect(isTokenType('cubicBezier')).to.equal(true)
    })

    it('returns true when given the string "number"', () => {
      expect(isTokenType('number')).to.equal(true)
    })

    it('returns true when given the string "strokeStyle"', () => {
      expect(isTokenType('strokeStyle')).to.equal(true)
    })

    it('returns true when given the string "border"', () => {
      expect(isTokenType('border')).to.equal(true)
    })

    it('returns true when given the string "transition"', () => {
      expect(isTokenType('transition')).to.equal(true)
    })

    it('returns true when given the string "shadow"', () => {
      expect(isTokenType('shadow')).to.equal(true)
    })

    it('returns true when given the string "gradient"', () => {
      expect(isTokenType('gradient')).to.equal(true)
    })

    it('returns true when given the string "typography"', () => {
      expect(isTokenType('typography')).to.equal(true)
    })

    it('returns false when given any other string', () => {
      expect(isTokenType('test')).to.equal(false)
    })

    it('returns false when given an array', () => {
      expect(isTokenType('color'.split(''))).to.equal(false)
    })

    it('returns false when given an object', () => {
      expect(isTokenType({ type: 'color' })).to.equal(false)
    })
  })
})
