import { expect } from 'chai'
import { isBorderToken } from './border.js'

describe('isBorderToken', () => {
  const $value = { color: '#008800', width: '1px', style: 'solid' }

  it('returns false for undefined', () => {
    expect(isBorderToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isBorderToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isBorderToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isBorderToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isBorderToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isBorderToken(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isBorderToken('1px solid #ff0000')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isBorderToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isBorderToken({})).to.equal(false)
  })

  it('returns true for an object with $type border and a valid $value', () => {
    expect(isBorderToken({ $type: 'border', $value })).to.equal(true)
  })

  it('returns true for an object with $type border and a reference $value', () => {
    expect(isBorderToken({ $type: 'border', $value: '{border.basic}' })).to.equal(true)
  })

  it('returns false for an object with no $type', () => {
    expect(isBorderToken({ $value })).to.equal(false)
  })

  it('returns false for an object with $type other than border', () => {
    expect(isBorderToken({ $type: 'outline', $value })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isBorderToken({ $type: 'border' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isBorderToken({ $type: 'border', $value: '1px solid #008800' })).to.equal(false)
  })
})
