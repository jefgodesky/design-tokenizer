import { expect } from 'chai'
import { isDerefDimensionToken } from './dimension.js'

describe('isDerefDimensionToken', () => {
  it('returns false for undefined', () => {
    expect(isDerefDimensionToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefDimensionToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefDimensionToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefDimensionToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefDimensionToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefDimensionToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefDimensionToken('1rem')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefDimensionToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefDimensionToken({})).to.equal(false)
  })

  it('returns true for an object with $type dimension and a valid $value', () => {
    expect(isDerefDimensionToken({ $type: 'dimension', $value: '1rem' })).to.equal(true)
  })

  it('returns false for an object with $type dimension and a reference $value', () => {
    expect(isDerefDimensionToken({ $type: 'dimension', $value: '{spacing.horizontal}' })).to.equal(false)
  })

  it('returns false for an object with no $type', () => {
    expect(isDerefDimensionToken({ $value: '1rem' })).to.equal(false)
  })

  it('returns false for an object with $type other than dimension', () => {
    expect(isDerefDimensionToken({ $type: 'dim', $value: '1rem' })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDerefDimensionToken({ $type: 'dimension' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDerefDimensionToken({ $type: 'dimension', $value: '1em' })).to.equal(false)
  })
})
