import { expect } from 'chai'
import { isNumberToken } from './number.js'

describe('isNumberToken', () => {
  it('returns false for undefined', () => {
    expect(isNumberToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isNumberToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isNumberToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isNumberToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isNumberToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isNumberToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isNumberToken('0')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isNumberToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isNumberToken({})).to.equal(false)
  })

  it('returns true for an object with $type number and a valid $value', () => {
    expect(isNumberToken({ $type: 'number', $value: 0 })).to.equal(true)
  })

  it('returns false for an object with no $type', () => {
    expect(isNumberToken({ $value: 0 })).to.equal(false)
  })

  it('returns false for an object with $type other than number', () => {
    expect(isNumberToken({ $type: 'num', $value: 0 })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isNumberToken({ $type: 'number' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isNumberToken({ $type: 'number', $value: '0' })).to.equal(false)
  })
})
