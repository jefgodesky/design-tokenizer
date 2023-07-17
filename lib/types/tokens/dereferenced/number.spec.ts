import { expect } from 'chai'
import { isDerefNumberToken } from './number.js'

describe('isDerefNumberToken', () => {
  it('returns false for undefined', () => {
    expect(isDerefNumberToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefNumberToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefNumberToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefNumberToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefNumberToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefNumberToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefNumberToken('0')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefNumberToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefNumberToken({})).to.equal(false)
  })

  it('returns true for an object with $type number and a valid $value', () => {
    expect(isDerefNumberToken({ $type: 'number', $value: 0 })).to.equal(true)
  })

  it('returns false for an object with $type number and a reference $value', () => {
    expect(isDerefNumberToken({ $type: 'number', $value: '{number.magic.nil}' })).to.equal(false)
  })

  it('returns false for an object with no $type', () => {
    expect(isDerefNumberToken({ $value: 0 })).to.equal(false)
  })

  it('returns false for an object with $type other than number', () => {
    expect(isDerefNumberToken({ $type: 'num', $value: 0 })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDerefNumberToken({ $type: 'number' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDerefNumberToken({ $type: 'number', $value: '0' })).to.equal(false)
  })
})
