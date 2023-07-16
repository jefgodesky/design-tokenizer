import { expect } from 'chai'
import { isStrokeStyleType } from './stroke-style.js'

describe('isStrokeStyleType', () => {
  const dashArray = ['0.5rem', '0.25rem']

  it('returns false when given undefined', () => {
    expect(isStrokeStyleType(undefined)).to.equal(false)
  })

  it('returns false when given null', () => {
    expect(isStrokeStyleType(null)).to.equal(false)
  })

  it('returns false when given true', () => {
    expect(isStrokeStyleType(true)).to.equal(false)
  })

  it('returns false when given false', () => {
    expect(isStrokeStyleType(false)).to.equal(false)
  })

  it('returns false when given a function', () => {
    expect(isStrokeStyleType(() => {})).to.equal(false)
  })

  it('returns false when given a number', () => {
    expect(isStrokeStyleType(1)).to.equal(false)
  })

  it('returns false when given a string', () => {
    expect(isStrokeStyleType('test')).to.equal(false)
  })

  it('returns false when given an array', () => {
    expect(isStrokeStyleType(dashArray)).to.equal(false)
  })

  it('returns false when given an empty object', () => {
    expect(isStrokeStyleType({})).to.equal(false)
  })

  it('returns false when given null for dashArray', () => {
    expect(isStrokeStyleType({ dashArray: null, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given true for dashArray', () => {
    expect(isStrokeStyleType({ dashArray: true, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given false for dashArray', () => {
    expect(isStrokeStyleType({ dashArray: false, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given a function for dashArray', () => {
    expect(isStrokeStyleType({ dashArray: () => {}, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given a number for dashArray', () => {
    expect(isStrokeStyleType({ dashArray: 2, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given a string for dashArray', () => {
    expect(isStrokeStyleType({ dashArray: dashArray[0], lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given an array for dashArray but no lineCap', () => {
    expect(isStrokeStyleType({ dashArray })).to.equal(false)
  })

  it('returns false when given an object for dashArray', () => {
    expect(isStrokeStyleType({ dashArray: { dashArray }, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given null for lineCap', () => {
    expect(isStrokeStyleType({ dashArray, lineChap: null })).to.equal(false)
  })

  it('returns false when given true for lineCap', () => {
    expect(isStrokeStyleType({ dashArray, lineChap: true })).to.equal(false)
  })

  it('returns false when given false for lineCap', () => {
    expect(isStrokeStyleType({ dashArray, lineChap: false })).to.equal(false)
  })

  it('returns false when given a function for lineCap', () => {
    expect(isStrokeStyleType({ dashArray, lineChap: () => {} })).to.equal(false)
  })

  it('returns false when given a number for lineCap', () => {
    expect(isStrokeStyleType({ dashArray, lineChap: 1 })).to.equal(false)
  })

  it('returns true when given an array of strings for dashArray and "round" for lineCap', () => {
    expect(isStrokeStyleType({ dashArray, lineCap: 'round' })).to.equal(true)
  })

  it('returns true when given an array of strings for dashArray and "butt" for lineCap', () => {
    expect(isStrokeStyleType({ dashArray, lineCap: 'butt' })).to.equal(true)
  })

  it('returns true when given an array of strings for dashArray and "square" for lineCap', () => {
    expect(isStrokeStyleType({ dashArray, lineCap: 'square' })).to.equal(true)
  })

  it('returns false when given any other string for lineCap', () => {
    expect(isStrokeStyleType({ dashArray, lineChap: 'test' })).to.equal(false)
  })

  it('returns false when given an array for lineCap', () => {
    expect(isStrokeStyleType({ dashArray, lineChap: [] })).to.equal(false)
  })

  it('returns false when given an object for lineCap', () => {
    expect(isStrokeStyleType({ dashArray, lineChap: { lineCap: 'round' } })).to.equal(false)
  })
})
