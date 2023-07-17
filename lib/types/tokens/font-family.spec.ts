import { expect } from 'chai'
import { isFontFamilyToken } from './font-family.js'

describe('isFontFamilyToken', () => {
  it('returns false for undefined', () => {
    expect(isFontFamilyToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isFontFamilyToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isFontFamilyToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isFontFamilyToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isFontFamilyToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isFontFamilyToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isFontFamilyToken('Helvetica')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isFontFamilyToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isFontFamilyToken({})).to.equal(false)
  })

  it('returns true for an object with $type fontFamily and a valid $value', () => {
    expect(isFontFamilyToken({ $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] })).to.equal(true)
  })

  it('returns true for an object with $type fontFamily and a reference $value', () => {
    expect(isFontFamilyToken({ $type: 'fontFamily', $value: '{font.family.body}' })).to.equal(true)
  })

  it('returns false for an object with no $type', () => {
    expect(isFontFamilyToken({ $value: ['Helvetica', 'sans-serif'] })).to.equal(false)
  })

  it('returns false for an object with $type other than fontFamily', () => {
    expect(isFontFamilyToken({ $type: 'font-family', $value: ['Helvetica', 'sans-serif'] })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isFontFamilyToken({ $type: 'fontFamily' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isFontFamilyToken({ $type: 'fontFamily', $value: 0 })).to.equal(false)
  })
})
