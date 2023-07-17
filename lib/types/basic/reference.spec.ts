import { expect } from 'chai'
import { isReference } from './reference.js'

describe('isReference', () => {
  it('returns false for undefined', () => {
    expect(isReference(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isReference(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isReference(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isReference(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isReference(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isReference(1)).to.equal(false)
  })

  it('returns true for a valid reference', () => {
    expect(isReference('{test}')).to.equal(true)
  })

  it('returns false for other strings', () => {
    expect(isReference('{test')).to.equal(false)
  })

  it('returns false for an array', () => {
    expect(isReference('{test}'.split(''))).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isReference({})).to.equal(false)
  })

  it('returns false for an object with a reference property', () => {
    expect(isReference({ reference: '{test}' })).to.equal(false)
  })
})
