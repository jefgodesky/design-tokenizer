import { expect } from 'chai'
import { isTypography } from './typography.js'

describe('isTypography', () => {
  it('returns false for undefined', () => {
    expect(isTypography(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isTypography(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isTypography(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isTypography(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isTypography(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isTypography(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isTypography('700 0.1px 42px/1.2 Roboto')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isTypography([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isTypography({})).to.equal(false)
  })

  it('returns true for an object with fontFamily, fontSize, fontWeight, letterSpacing, and lineHeight properties', () => {
    expect(isTypography({ fontFamily: 'Roboto', fontSize: '42px', fontWeight: 700, letterSpacing: '0.1px', lineHeight: 1.2 })).to.equal(true)
  })

  it('returns false for an object with no fontFamily', () => {
    expect(isTypography({ fontSize: '42px', fontWeight: 700, letterSpacing: '0.1px', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with invalid fontFamily', () => {
    expect(isTypography({ fontFamily: 1, fontSize: '42px', fontWeight: 700, letterSpacing: '0.1px', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with no fontSize', () => {
    expect(isTypography({ fontFamily: 'Roboto', fontWeight: 700, letterSpacing: '0.1px', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with invalid fontSize', () => {
    expect(isTypography({ fontFamily: 'Roboto', fontSize: 42, fontWeight: 700, letterSpacing: '0.1px', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with no fontWeight', () => {
    expect(isTypography({ fontFamily: 'Roboto', fontSize: '42px', letterSpacing: '0.1px', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with invalid fontWeight', () => {
    expect(isTypography({ fontFamily: 'Roboto', fontSize: '42px', fontWeight: '700', letterSpacing: '0.1px', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with no letterSpacing', () => {
    expect(isTypography({ fontFamily: 'Roboto', fontSize: '42px', fontWeight: 700, lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with invalid letterSpacing', () => {
    expect(isTypography({ fontFamily: 'Roboto', fontSize: '42px', fontWeight: 700, letterSpacing: '1em', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with no lineHeight', () => {
    expect(isTypography({ fontFamily: 'Roboto', fontSize: '42px', fontWeight: 700, letterSpacing: '0.1px' })).to.equal(false)
  })

  it('returns false for an object with invalid lineHeight', () => {
    expect(isTypography({ fontFamily: 'Roboto', fontSize: '42px', fontWeight: 700, letterSpacing: '0.1px', lineHeight: '1.2' })).to.equal(false)
  })
})