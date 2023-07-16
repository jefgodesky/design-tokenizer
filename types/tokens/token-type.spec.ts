import { expect } from 'chai'
import { isTokenType, tokenTypes } from './token-type.js'

describe('isTokenType', () => {
  it('returns false for undefined', () => {
    expect(isTokenType(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isTokenType(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isTokenType(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isTokenType(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isTokenType(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isTokenType(1)).to.equal(false)
  })

  it('returns true for valid strings', () => {
    const checks = tokenTypes.map(type => isTokenType(type))
    expect(checks.reduce((acc, curr) => acc && curr, true)).to.equal(true)
  })

  it('returns false for invalid strings', () => {
    expect(isTokenType('nope')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isTokenType([])).to.equal(false)
  })

  it('returns false for an array of valid strings', () => {
    expect(isTokenType(tokenTypes)).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isTokenType({})).to.equal(false)
  })

  it('returns false for an object with a valid property', () => {
    expect(isTokenType({ type: tokenTypes[0] })).to.equal(false)
  })
})
