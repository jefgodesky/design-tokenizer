import { expect } from 'chai'
import { isDerefGradientToken } from './gradient.js'

describe('isDerefGradientToken', () => {
  const $value = [
    { color: '#000000', position: 0 },
    { color: '#ffffff', position: 1 }
  ]

  it('returns false for undefined', () => {
    expect(isDerefGradientToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefGradientToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefGradientToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefGradientToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefGradientToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefGradientToken(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefGradientToken('#000000 0%, #ffffff 100%')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefGradientToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefGradientToken({})).to.equal(false)
  })

  it('returns true for an object with $type gradient and a valid $value', () => {
    expect(isDerefGradientToken({ $type: 'gradient', $value })).to.equal(true)
  })

  it('returns false for an object with $type gradient and a reference $value', () => {
    expect(isDerefGradientToken({ $type: 'gradient', $value: '{gradient.monochrome}' })).to.equal(false)
  })

  it('returns false for an object with no $type', () => {
    expect(isDerefGradientToken({ $value })).to.equal(false)
  })

  it('returns false for an object with $type other than gradient', () => {
    expect(isDerefGradientToken({ $type: 'grad', $value })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDerefGradientToken({ $type: 'gradient' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDerefGradientToken({ $type: 'gradient', $value: $value[0] })).to.equal(false)
  })
})
