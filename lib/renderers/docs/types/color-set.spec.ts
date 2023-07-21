import { expect } from 'chai'
import { isColorSet, isColorSetType } from './color-set.js'

describe('isColorSet', () => {
  it('rejects undefined', () => {
    expect(isColorSet(undefined)).to.equal(false)
  })

  it('rejects null', () => {
    expect(isColorSet(null)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isColorSet(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isColorSet(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isColorSet(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isColorSet(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isColorSet('test')).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isColorSet([1, 2, 3])).to.equal(false)
  })

  it('accepts an empty object', () => {
    expect(isColorSet({})).to.equal(true)
  })

  it('rejects an object with undefined properties', () => {
    expect(isColorSet({ a: undefined })).to.equal(false)
  })

  it('rejects an object with null properties', () => {
    expect(isColorSet({ a: null })).to.equal(false)
  })

  it('rejects an object with function properties', () => {
    expect(isColorSet({ a: () => {} })).to.equal(false)
  })

  it('rejects an object with true properties', () => {
    expect(isColorSet({ a: true })).to.equal(false)
  })

  it('rejects an object with false properties', () => {
    expect(isColorSet({ a: false })).to.equal(false)
  })

  it('accepts an object with number properties', () => {
    expect(isColorSet({ a: 1 })).to.equal(true)
  })

  it('rejects an object with string properties', () => {
    expect(isColorSet({ a: 'test' })).to.equal(false)
  })

  it('rejects an object with array properties', () => {
    expect(isColorSet({ a: [1, 2, 3] })).to.equal(false)
  })

  it('rejects an object with object properties', () => {
    expect(isColorSet({ a: { b: 1 } })).to.equal(false)
  })
})

describe('isColorSetType', () => {
  it('rejects undefined', () => {
    expect(isColorSetType(undefined, 'rgb')).to.equal(false)
  })

  it('rejects null', () => {
    expect(isColorSetType(null, 'rgb')).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isColorSetType(() => {}, 'rgb')).to.equal(false)
  })

  it('rejects true', () => {
    expect(isColorSetType(true, 'rgb')).to.equal(false)
  })

  it('rejects false', () => {
    expect(isColorSetType(false, 'rgb')).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isColorSetType(1, 'rgb')).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isColorSetType('0, 0, 0', 'rgb')).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isColorSetType([0, 0, 0], 'rgb')).to.equal(false)
  })

  it('rejects an empty object', () => {
    expect(isColorSetType({}, 'rgb')).to.equal(false)
  })

  it('rejects an object with undefined properties', () => {
    expect(isColorSetType({ a: undefined }, 'rgb')).to.equal(false)
  })

  it('rejects an object with null properties', () => {
    expect(isColorSetType({ a: null }, 'rgb')).to.equal(false)
  })

  it('rejects an object with function properties', () => {
    expect(isColorSetType({ a: () => {} }, 'rgb')).to.equal(false)
  })

  it('rejects an object with true properties', () => {
    expect(isColorSetType({ a: true }, 'rgb')).to.equal(false)
  })

  it('rejects an object with false properties', () => {
    expect(isColorSetType({ a: false }, 'rgb')).to.equal(false)
  })

  it('rejects an object with number properties that don\'t match type', () => {
    expect(isColorSetType({ a: 1 }, 'rgb')).to.equal(false)
  })

  it('accepts an object with number properties that match type', () => {
    expect(isColorSetType({ r: 0, g: 0, b: 0 }, 'rgb')).to.equal(true)
  })

  it('rejects an object with string properties', () => {
    expect(isColorSetType({ a: 'test' }, 'rgb')).to.equal(false)
  })

  it('rejects an object with array properties', () => {
    expect(isColorSetType({ a: [0, 0, 0] }, 'rgb')).to.equal(false)
  })

  it('rejects an object with object properties', () => {
    expect(isColorSetType({ a: { b: 1 } }, 'rgb')).to.equal(false)
  })
})
