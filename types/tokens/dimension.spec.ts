import { expect } from 'chai'
import { isDimensionToken } from './dimension.js'

describe('isDimensionToken', () => {
  it('returns false for undefined', () => {
    expect(isDimensionToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDimensionToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDimensionToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDimensionToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDimensionToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDimensionToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDimensionToken('1rem')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDimensionToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDimensionToken({})).to.equal(false)
  })

  it('returns true for an object with $type dimension and a valid $value', () => {
    expect(isDimensionToken({ $type: 'dimension', $value: '1rem' })).to.equal(true)
  })

  it('returns false for an object with no $type', () => {
    expect(isDimensionToken({ $value: '1rem' })).to.equal(false)
  })

  it('returns false for an object with $type other than dimension', () => {
    expect(isDimensionToken({ $type: 'dim', $value: '1rem' })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDimensionToken({ $type: 'dimension' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDimensionToken({ $type: 'dimension', $value: '1em' })).to.equal(false)
  })
})
