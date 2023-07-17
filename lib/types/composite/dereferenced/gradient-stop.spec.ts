import { expect } from 'chai'
import { isDerefGradientStop } from './gradient-stop.js'

describe('isDerefGradientStop', () => {
  it('returns false for undefined', () => {
    expect(isDerefGradientStop(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefGradientStop(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefGradientStop(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefGradientStop(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefGradientStop(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefGradientStop(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefGradientStop('#ff0000 0')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefGradientStop([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefGradientStop({})).to.equal(false)
  })

  it('returns true for an object with color and position', () => {
    expect(isDerefGradientStop({ color: '#008800', position: 0 })).to.equal(true)
  })

  it('returns false for an object with a color reference', () => {
    expect(isDerefGradientStop({ color: '{color.green}', position: 0 })).to.equal(false)
  })

  it('returns false for an object with a position reference', () => {
    expect(isDerefGradientStop({ color: '#008800', position: '{numbers.magic.nil}' })).to.equal(false)
  })

  it('returns false for an object with no color', () => {
    expect(isDerefGradientStop({ position: 0 })).to.equal(false)
  })

  it('returns false for an object with invalid color', () => {
    expect(isDerefGradientStop({ color: 'red', position: 0 })).to.equal(false)
  })

  it('returns false for an object with no position', () => {
    expect(isDerefGradientStop({ color: '#ff0000' })).to.equal(false)
  })

  it('returns false for an object with invalid position', () => {
    expect(isDerefGradientStop({ color: '#ff0000', position: '0' })).to.equal(false)
  })
})
