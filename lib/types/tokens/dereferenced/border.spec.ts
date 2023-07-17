import { expect } from 'chai'
import { isDerefBorderToken } from './border.js'

describe('isDerefBorderToken', () => {
  const $value = { color: '#ff0000', width: '1px', style: 'solid' }

  it('returns false for undefined', () => {
    expect(isDerefBorderToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefBorderToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefBorderToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefBorderToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefBorderToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefBorderToken(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefBorderToken('1px solid #ff0000')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefBorderToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefBorderToken({})).to.equal(false)
  })

  it('returns true for an object with $type border and a valid $value', () => {
    expect(isDerefBorderToken({ $type: 'border', $value })).to.equal(true)
  })

  it('returns false for an object with $type border and a reference $value', () => {
    expect(isDerefBorderToken({ $type: 'border', $value: '{border.basic}' })).to.equal(false)
  })

  it('returns false for an object with no $type', () => {
    expect(isDerefBorderToken({ $value })).to.equal(false)
  })

  it('returns false for an object with $type other than border', () => {
    expect(isDerefBorderToken({ $type: 'outline', $value })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDerefBorderToken({ $type: 'border' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDerefBorderToken({ $type: 'border', $value: '1px solid #ff0000' })).to.equal(false)
  })
})
