import { expect } from 'chai'
import { isDerefStrokeStyleToken } from './stroke-style.js'

describe('isDerefStrokeStyleToken', () => {
  it('returns false for undefined', () => {
    expect(isDerefStrokeStyleToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefStrokeStyleToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefStrokeStyleToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefStrokeStyleToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefStrokeStyleToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefStrokeStyleToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefStrokeStyleToken('solid')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefStrokeStyleToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefStrokeStyleToken({})).to.equal(false)
  })

  it('returns true for an object with $type strokeStyle and a valid string $value', () => {
    expect(isDerefStrokeStyleToken({ $type: 'strokeStyle', $value: 'solid' })).to.equal(true)
  })

  it('returns true for an object with $type strokeStyle and a valid object $value', () => {
    expect(isDerefStrokeStyleToken({ $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } })).to.equal(true)
  })

  it('returns false for an object with $type strokeStyle and a reference $value', () => {
    expect(isDerefStrokeStyleToken({ $type: 'strokeStyle', $value: '{strokes.basic}' })).to.equal(false)
  })

  it('returns false for an object with no $type', () => {
    expect(isDerefStrokeStyleToken({ $value: 'solid' })).to.equal(false)
  })

  it('returns false for an object with $type other than number', () => {
    expect(isDerefStrokeStyleToken({ $type: 'stroke-style', $value: 'solid' })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDerefStrokeStyleToken({ $type: 'strokeStyle' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDerefStrokeStyleToken({ $type: 'strokeStyle', $value: 'jazzy' })).to.equal(false)
  })
})
