import { expect } from 'chai'
import { isDictionaryKey } from './dictionary-key.js'

describe('isDictionaryKey', () => {
  it('returns false for undefined', () => {
    expect(isDictionaryKey(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDictionaryKey(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDictionaryKey(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDictionaryKey(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDictionaryKey(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDictionaryKey(24601)).to.equal(false)
  })

  it('returns true for most strings', () => {
    expect(isDictionaryKey('Jean Valjean')).to.equal(true)
  })

  it('returns false for strings that start with $', () => {
    expect(isDictionaryKey('$mayor')).to.equal(false)
  })

  it('returns false for arrays', () => {
    expect(isDictionaryKey([])).to.equal(false)
  })

  it('returns false for objects', () => {
    expect(isDictionaryKey({})).to.equal(false)
  })
})
