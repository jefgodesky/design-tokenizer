import { expect } from 'chai'
import { isGradientToken } from './gradient.js'

describe('isGradientToken', () => {
  const $value = [
    { color: '#000000', position: 0 },
    { color: '#ffffff', position: 1 }
  ]

  it('returns false for undefined', () => {
    expect(isGradientToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isGradientToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isGradientToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isGradientToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isGradientToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isGradientToken(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isGradientToken('#000000 0%, #ffffff 100%')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isGradientToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isGradientToken({})).to.equal(false)
  })

  it('returns true for an object with $type gradient and a valid $value', () => {
    expect(isGradientToken({ $type: 'gradient', $value })).to.equal(true)
  })

  it('returns false for an object with no $type', () => {
    expect(isGradientToken({ $value })).to.equal(false)
  })

  it('returns false for an object with $type other than gradient', () => {
    expect(isGradientToken({ $type: 'grad', $value })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isGradientToken({ $type: 'gradient' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isGradientToken({ $type: 'gradient', $value: $value[0] })).to.equal(false)
  })
})
