import { expect } from 'chai'
import { isStrokeStyleObject } from './stroke-style.js'

describe('isStrokeStyleObject', () => {
  const dashArray = ['0.5rem', '0.25rem']

  it('returns false when given undefined', () => {
    expect(isStrokeStyleObject(undefined)).to.equal(false)
  })

  it('returns false when given null', () => {
    expect(isStrokeStyleObject(null)).to.equal(false)
  })

  it('returns false when given true', () => {
    expect(isStrokeStyleObject(true)).to.equal(false)
  })

  it('returns false when given false', () => {
    expect(isStrokeStyleObject(false)).to.equal(false)
  })

  it('returns false when given a function', () => {
    expect(isStrokeStyleObject(() => {})).to.equal(false)
  })

  it('returns false when given a number', () => {
    expect(isStrokeStyleObject(1)).to.equal(false)
  })

  it('returns false when given a string', () => {
    expect(isStrokeStyleObject('test')).to.equal(false)
  })

  it('returns false when given an array', () => {
    expect(isStrokeStyleObject(dashArray)).to.equal(false)
  })

  it('returns false when given an empty object', () => {
    expect(isStrokeStyleObject({})).to.equal(false)
  })

  it('returns false when given null for dashArray', () => {
    expect(isStrokeStyleObject({ dashArray: null, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given true for dashArray', () => {
    expect(isStrokeStyleObject({ dashArray: true, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given false for dashArray', () => {
    expect(isStrokeStyleObject({ dashArray: false, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given a function for dashArray', () => {
    expect(isStrokeStyleObject({ dashArray: () => {}, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given a number for dashArray', () => {
    expect(isStrokeStyleObject({ dashArray: 2, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given a string for dashArray', () => {
    expect(isStrokeStyleObject({ dashArray: dashArray[0], lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given an array for dashArray but no lineCap', () => {
    expect(isStrokeStyleObject({ dashArray })).to.equal(false)
  })

  it('returns false when given an object for dashArray', () => {
    expect(isStrokeStyleObject({ dashArray: { dashArray }, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given null for lineCap', () => {
    expect(isStrokeStyleObject({ dashArray, lineChap: null })).to.equal(false)
  })

  it('returns false when given true for lineCap', () => {
    expect(isStrokeStyleObject({ dashArray, lineChap: true })).to.equal(false)
  })

  it('returns false when given false for lineCap', () => {
    expect(isStrokeStyleObject({ dashArray, lineChap: false })).to.equal(false)
  })

  it('returns false when given a function for lineCap', () => {
    expect(isStrokeStyleObject({ dashArray, lineChap: () => {} })).to.equal(false)
  })

  it('returns false when given a number for lineCap', () => {
    expect(isStrokeStyleObject({ dashArray, lineChap: 1 })).to.equal(false)
  })

  it('returns true when given an array of strings for dashArray and "round" for lineCap', () => {
    expect(isStrokeStyleObject({ dashArray, lineCap: 'round' })).to.equal(true)
  })

  it('returns true when given an array of strings for dashArray and "butt" for lineCap', () => {
    expect(isStrokeStyleObject({ dashArray, lineCap: 'butt' })).to.equal(true)
  })

  it('returns true when given an array of strings for dashArray and "square" for lineCap', () => {
    expect(isStrokeStyleObject({ dashArray, lineCap: 'square' })).to.equal(true)
  })

  it('returns false when given any other string for lineCap', () => {
    expect(isStrokeStyleObject({ dashArray, lineChap: 'test' })).to.equal(false)
  })

  it('returns false when given invalid strings for dashArray', () => {
    expect(isStrokeStyleObject({ dashArray: ['hello', 'world'], lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given an array for lineCap', () => {
    expect(isStrokeStyleObject({ dashArray, lineChap: [] })).to.equal(false)
  })

  it('returns false when given an object for lineCap', () => {
    expect(isStrokeStyleObject({ dashArray, lineChap: { lineCap: 'round' } })).to.equal(false)
  })
})
