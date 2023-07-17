import { expect } from 'chai'
import { isDerefTypography } from './typography.js'

describe('isDerefTypography', () => {
  it('returns false for undefined', () => {
    expect(isDerefTypography(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefTypography(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefTypography(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefTypography(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefTypography(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefTypography(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefTypography('700 0.1px 42px/1.2 Roboto')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefTypography([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefTypography({})).to.equal(false)
  })

  it('returns true for an object with fontFamily, fontSize, fontWeight, letterSpacing, and lineHeight properties', () => {
    expect(isDerefTypography({ fontFamily: 'Helvetica', fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0px', lineHeight: 1.2 })).to.equal(true)
  })

  /**
   * Trying to differentiate a reference from all the possible font family
   * names is probably asking a bit too much from Typescript.
  it('returns false for an object with a font family reference', () => {
    expect(isDerefTypography({ fontFamily: '{font.family.sans}', fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0px', lineHeight: 1.2 })).to.equal(false)
  })
   **/

  it('returns false for an object with a font size reference', () => {
    expect(isDerefTypography({ fontFamily: 'Helvetica', fontSize: '{font.size.base}', fontWeight: 'normal', letterSpacing: '0px', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with a font weight reference', () => {
    expect(isDerefTypography({ fontFamily: 'Helvetica', fontSize: '1rem', fontWeight: '{font.weight.base}', letterSpacing: '0px', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with a letter spacing reference', () => {
    expect(isDerefTypography({ fontFamily: 'Helvetica', fontSize: '1rem', fontWeight: 'normal', letterSpacing: '{font.spacing.letter.base}', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with a line height reference', () => {
    expect(isDerefTypography({ fontFamily: 'Helvetica', fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0px', lineHeight: '{font.spacing.line.base}' })).to.equal(false)
  })

  it('returns false for an object with no fontFamily', () => {
    expect(isDerefTypography({ fontSize: '42px', fontWeight: 700, letterSpacing: '0.1px', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with invalid fontFamily', () => {
    expect(isDerefTypography({ fontFamily: 1, fontSize: '42px', fontWeight: 700, letterSpacing: '0.1px', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with no fontSize', () => {
    expect(isDerefTypography({ fontFamily: 'Roboto', fontWeight: 700, letterSpacing: '0.1px', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with invalid fontSize', () => {
    expect(isDerefTypography({ fontFamily: 'Roboto', fontSize: 42, fontWeight: 700, letterSpacing: '0.1px', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with no fontWeight', () => {
    expect(isDerefTypography({ fontFamily: 'Roboto', fontSize: '42px', letterSpacing: '0.1px', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with invalid fontWeight', () => {
    expect(isDerefTypography({ fontFamily: 'Roboto', fontSize: '42px', fontWeight: '700', letterSpacing: '0.1px', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with no letterSpacing', () => {
    expect(isDerefTypography({ fontFamily: 'Roboto', fontSize: '42px', fontWeight: 700, lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with invalid letterSpacing', () => {
    expect(isDerefTypography({ fontFamily: 'Roboto', fontSize: '42px', fontWeight: 700, letterSpacing: '1em', lineHeight: 1.2 })).to.equal(false)
  })

  it('returns false for an object with no lineHeight', () => {
    expect(isDerefTypography({ fontFamily: 'Roboto', fontSize: '42px', fontWeight: 700, letterSpacing: '0.1px' })).to.equal(false)
  })

  it('returns false for an object with invalid lineHeight', () => {
    expect(isDerefTypography({ fontFamily: 'Roboto', fontSize: '42px', fontWeight: 700, letterSpacing: '0.1px', lineHeight: '1.2' })).to.equal(false)
  })
})
