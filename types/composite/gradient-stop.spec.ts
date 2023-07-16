import { expect } from 'chai'
import { isGradientStop } from './gradient-stop.js'

describe('isGradientStop', () => {
  it('returns false for undefined', () => {
    expect(isGradientStop(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isGradientStop(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isGradientStop(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isGradientStop(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isGradientStop(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isGradientStop(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isGradientStop('#ff0000 0')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isGradientStop([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isGradientStop({})).to.equal(false)
  })

  it('returns true for an object with color and position', () => {
    expect(isGradientStop({ color: '#ff0000', position: 0 })).to.equal(true)
  })

  it('returns false for an object with no color', () => {
    expect(isGradientStop({ position: 0 })).to.equal(false)
  })

  it('returns false for an object with invalid color', () => {
    expect(isGradientStop({ color: 'red', position: 0 })).to.equal(false)
  })

  it('returns false for an object with no position', () => {
    expect(isGradientStop({ color: '#ff0000' })).to.equal(false)
  })

  it('returns false for an object with invalid position', () => {
    expect(isGradientStop({ color: '#ff0000', position: '0' })).to.equal(false)
  })
})
