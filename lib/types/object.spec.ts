import { expect } from 'chai'
import isObject from './object.js'

describe('isObject', () => {
  it('rejects undefined', () => {
    expect(isObject(undefined)).to.equal(false)
  })

  it('rejects null', () => {
    expect(isObject(null)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isObject(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isObject(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isObject(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isObject(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isObject('test')).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isObject([])).to.equal(false)
  })

  it('accepts empty objects', () => {
    expect(isObject({})).to.equal(true)
  })

  it('accepts arbitrary objects', () => {
    expect(isObject({ a: 1, b: { c: true } })).to.equal(true)
  })
})
