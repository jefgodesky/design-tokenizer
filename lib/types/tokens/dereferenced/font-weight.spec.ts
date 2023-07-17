import { expect } from 'chai'
import { isDerefFontWeightToken } from './font-weight.js'

describe('isDerefFontWeightToken', () => {
  it('returns false for undefined', () => {
    expect(isDerefFontWeightToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefFontWeightToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefFontWeightToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefFontWeightToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefFontWeightToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefFontWeightToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefFontWeightToken('normal')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefFontWeightToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefFontWeightToken({})).to.equal(false)
  })

  it('returns true for an object with $type fontWeight and a valid $value', () => {
    expect(isDerefFontWeightToken({ $type: 'fontWeight', $value: 'normal' })).to.equal(true)
  })

  it('returns false for an object with $type fontWeight and a reference $value', () => {
    expect(isDerefFontWeightToken({ $type: 'fontWeight', $value: '{font.weight.baseline}}' })).to.equal(false)
  })

  it('returns false for an object with no $type', () => {
    expect(isDerefFontWeightToken({ $value: 'normal' })).to.equal(false)
  })

  it('returns false for an object with $type other than fontWeight', () => {
    expect(isDerefFontWeightToken({ $type: 'font-weight', $value: 'normal' })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDerefFontWeightToken({ $type: 'fontWeight' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDerefFontWeightToken({ $type: 'fontWeight', $value: 0 })).to.equal(false)
  })
})
