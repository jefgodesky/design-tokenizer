import { expect } from 'chai'
import { isStrokeStyleToken } from './stroke-style.js'

describe('isStrokeStyleToken', () => {
  it('returns false for undefined', () => {
    expect(isStrokeStyleToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isStrokeStyleToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isStrokeStyleToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isStrokeStyleToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isStrokeStyleToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isStrokeStyleToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isStrokeStyleToken('solid')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isStrokeStyleToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isStrokeStyleToken({})).to.equal(false)
  })

  it('returns true for an object with $type strokeStyle and a valid string $value', () => {
    expect(isStrokeStyleToken({ $type: 'strokeStyle', $value: 'solid' })).to.equal(true)
  })

  it('returns true for an object with $type strokeStyle and a valid object $value', () => {
    expect(isStrokeStyleToken({ $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } })).to.equal(true)
  })

  it('returns true for an object with references in dashArray', () => {
    expect(isStrokeStyleToken({ $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '{dash.short}'], lineCap: 'round' } })).to.equal(true)
  })

  it('returns true for an object with $type strokeStyle and a reference $value', () => {
    expect(isStrokeStyleToken({ $type: 'strokeStyle', $value: '{strokes.basic}' })).to.equal(true)
  })

  it('returns false for an object with no $type', () => {
    expect(isStrokeStyleToken({ $value: 'solid' })).to.equal(false)
  })

  it('returns false for an object with $type other than number', () => {
    expect(isStrokeStyleToken({ $type: 'stroke-style', $value: 'solid' })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isStrokeStyleToken({ $type: 'strokeStyle' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isStrokeStyleToken({ $type: 'strokeStyle', $value: 'jazzy' })).to.equal(false)
  })
})
