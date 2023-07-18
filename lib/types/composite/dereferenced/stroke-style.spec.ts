import { expect } from 'chai'
import { isDerefStrokeStyleObject } from './stroke-style.js'

describe('isDerefStrokeStyleObject', () => {
  const dashArray = ['0.5rem', '0.25rem']

  it('returns false when given undefined', () => {
    expect(isDerefStrokeStyleObject(undefined)).to.equal(false)
  })

  it('returns false when given null', () => {
    expect(isDerefStrokeStyleObject(null)).to.equal(false)
  })

  it('returns false when given true', () => {
    expect(isDerefStrokeStyleObject(true)).to.equal(false)
  })

  it('returns false when given false', () => {
    expect(isDerefStrokeStyleObject(false)).to.equal(false)
  })

  it('returns false when given a function', () => {
    expect(isDerefStrokeStyleObject(() => {})).to.equal(false)
  })

  it('returns false when given a number', () => {
    expect(isDerefStrokeStyleObject(1)).to.equal(false)
  })

  it('returns false when given a string', () => {
    expect(isDerefStrokeStyleObject('test')).to.equal(false)
  })

  it('returns false when given an array', () => {
    expect(isDerefStrokeStyleObject(dashArray)).to.equal(false)
  })

  it('returns false when given an empty object', () => {
    expect(isDerefStrokeStyleObject({})).to.equal(false)
  })

  it('returns false when given null for dashArray', () => {
    expect(isDerefStrokeStyleObject({ dashArray: null, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given true for dashArray', () => {
    expect(isDerefStrokeStyleObject({ dashArray: true, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given false for dashArray', () => {
    expect(isDerefStrokeStyleObject({ dashArray: false, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given a function for dashArray', () => {
    expect(isDerefStrokeStyleObject({ dashArray: () => {}, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given a number for dashArray', () => {
    expect(isDerefStrokeStyleObject({ dashArray: 2, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given a string for dashArray', () => {
    expect(isDerefStrokeStyleObject({ dashArray: dashArray[0], lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given an array for dashArray but no lineCap', () => {
    expect(isDerefStrokeStyleObject({ dashArray })).to.equal(false)
  })

  it('returns false when given an object for dashArray', () => {
    expect(isDerefStrokeStyleObject({ dashArray: { dashArray }, lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given null for lineCap', () => {
    expect(isDerefStrokeStyleObject({ dashArray, lineCap: null })).to.equal(false)
  })

  it('returns false when given true for lineCap', () => {
    expect(isDerefStrokeStyleObject({ dashArray, lineCap: true })).to.equal(false)
  })

  it('returns false when given false for lineCap', () => {
    expect(isDerefStrokeStyleObject({ dashArray, lineCap: false })).to.equal(false)
  })

  it('returns false when given a function for lineCap', () => {
    expect(isDerefStrokeStyleObject({ dashArray, lineCap: () => {} })).to.equal(false)
  })

  it('returns false when given a number for lineCap', () => {
    expect(isDerefStrokeStyleObject({ dashArray, lineCap: 1 })).to.equal(false)
  })

  it('returns true when given an array of strings for dashArray and "round" for lineCap', () => {
    expect(isDerefStrokeStyleObject({ dashArray, lineCap: 'round' })).to.equal(true)
  })

  it('returns false when given an array of references for dashArray and "round" for lineCap', () => {
    expect(isDerefStrokeStyleObject({ dashArray: ['{dash.short}', '{dash.long}'], lineCap: 'round' })).to.equal(false)
  })

  it('returns true when given an array of strings for dashArray and "butt" for lineCap', () => {
    expect(isDerefStrokeStyleObject({ dashArray, lineCap: 'butt' })).to.equal(true)
  })

  it('returns true when given an array of strings for dashArray and "square" for lineCap', () => {
    expect(isDerefStrokeStyleObject({ dashArray, lineCap: 'square' })).to.equal(true)
  })

  it('returns false when given any other string for lineCap', () => {
    expect(isDerefStrokeStyleObject({ dashArray, lineCap: 'test' })).to.equal(false)
  })

  it('returns false when given invalid strings for dashArray', () => {
    expect(isDerefStrokeStyleObject({ dashArray: ['hello', 'world'], lineCap: 'round' })).to.equal(false)
  })

  it('returns false when given an array for lineCap', () => {
    expect(isDerefStrokeStyleObject({ dashArray, lineCap: [] })).to.equal(false)
  })

  it('returns false when given an object for lineCap', () => {
    expect(isDerefStrokeStyleObject({ dashArray, lineCap: { lineCap: 'round' } })).to.equal(false)
  })
})
