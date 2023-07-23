import { expect } from 'chai'
import { isDictionary } from './dictionary.js'

describe('isDictionary', () => {
  it('rejects undefined', () => {
    expect(isDictionary(undefined)).to.equal(false)
  })

  it('rejects null', () => {
    expect(isDictionary(null)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isDictionary(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isDictionary(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isDictionary(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isDictionary(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isDictionary('test')).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isDictionary([])).to.equal(false)
  })

  it('accepts empty objects', () => {
    expect(isDictionary({})).to.equal(true)
  })

  it('rejects objects with undefined properties', () => {
    expect(isDictionary({ a: undefined })).to.equal(false)
  })

  it('rejects objects with null properties', () => {
    expect(isDictionary({ a: null })).to.equal(false)
  })

  it('rejects objects with function properties', () => {
    expect(isDictionary({ a: () => {} })).to.equal(false)
  })

  it('rejects objects with true properties', () => {
    expect(isDictionary({ a: true })).to.equal(false)
  })

  it('rejects objects with false properties', () => {
    expect(isDictionary({ a: false })).to.equal(false)
  })

  it('rejects objects with number properties', () => {
    expect(isDictionary({ a: 1 })).to.equal(false)
  })

  it('accepts objects with string properties', () => {
    expect(isDictionary({ a: 'test' })).to.equal(true)
  })

  it('rejects objects with array properties', () => {
    expect(isDictionary({ a: [] })).to.equal(false)
  })

  it('rejects objects with object properties', () => {
    expect(isDictionary({ a: {} })).to.equal(false)
  })
})
