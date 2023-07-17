import { expect } from 'chai'
import { isFontWeightToken } from './font-weight.js'

describe('isFontWeightToken', () => {
  it('returns false for undefined', () => {
    expect(isFontWeightToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isFontWeightToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isFontWeightToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isFontWeightToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isFontWeightToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isFontWeightToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isFontWeightToken('normal')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isFontWeightToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isFontWeightToken({})).to.equal(false)
  })

  it('returns true for an object with $type fontWeight and a valid $value', () => {
    expect(isFontWeightToken({ $type: 'fontWeight', $value: 'normal' })).to.equal(true)
  })

  it('returns true for an object with $type fontWeight and a reference $value', () => {
    expect(isFontWeightToken({ $type: 'fontWeight', $value: '{font.weight.baseline}}' })).to.equal(true)
  })

  it('returns false for an object with no $type', () => {
    expect(isFontWeightToken({ $value: 'normal' })).to.equal(false)
  })

  it('returns false for an object with $type other than fontWeight', () => {
    expect(isFontWeightToken({ $type: 'font-weight', $value: 'normal' })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isFontWeightToken({ $type: 'fontWeight' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isFontWeightToken({ $type: 'fontWeight', $value: 0 })).to.equal(false)
  })
})
