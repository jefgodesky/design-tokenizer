import { expect } from 'chai'
import { isDerefFontFamilyToken } from './font-family.js'

describe('isDerefFontFamilyToken', () => {
  it('returns false for undefined', () => {
    expect(isDerefFontFamilyToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefFontFamilyToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefFontFamilyToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefFontFamilyToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefFontFamilyToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefFontFamilyToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefFontFamilyToken('Helvetica')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefFontFamilyToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefFontFamilyToken({})).to.equal(false)
  })

  it('returns true for an object with $type fontFamily and a valid $value', () => {
    expect(isDerefFontFamilyToken({ $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] })).to.equal(true)
  })

  it('returns false for an object with $type fontFamily and a reference $value', () => {
    expect(isDerefFontFamilyToken({ $type: 'fontFamily', $value: '{font.family.body}' })).to.equal(false)
  })

  it('returns false for an object with no $type', () => {
    expect(isDerefFontFamilyToken({ $value: ['Helvetica', 'sans-serif'] })).to.equal(false)
  })

  it('returns false for an object with $type other than fontFamily', () => {
    expect(isDerefFontFamilyToken({ $type: 'font-family', $value: ['Helvetica', 'sans-serif'] })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDerefFontFamilyToken({ $type: 'fontFamily' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDerefFontFamilyToken({ $type: 'fontFamily', $value: 0 })).to.equal(false)
  })
})
