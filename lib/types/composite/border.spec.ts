import { expect } from 'chai'
import { isBorder } from './border.js'

describe('isBorder', () => {
  it('returns false for undefined', () => {
    expect(isBorder(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isBorder(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isBorder(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isBorder(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isBorder(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isBorder(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isBorder('1px solid #ff0000')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isBorder([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isBorder({})).to.equal(false)
  })

  it('returns true for an object with color, width, and style', () => {
    expect(isBorder({ color: '#008800', width: '1px', style: 'solid' })).to.equal(true)
  })

  it('returns true for an object with a reference for color', () => {
    expect(isBorder({ color: '{color.green}', width: '1px', style: 'solid' })).to.equal(true)
  })

  it('returns true for an object with a reference for width', () => {
    expect(isBorder({ color: '#008800', width: '{width.border}', style: 'solid' })).to.equal(true)
  })

  it('returns true for an object with a reference for style', () => {
    expect(isBorder({ color: '#008800', width: '1px', style: '{strokeStyle.border}' })).to.equal(true)
  })

  it('returns false if object has no color', () => {
    expect(isBorder({ width: '1px', style: 'solid' })).to.equal(false)
  })

  it('returns false if color is invalid', () => {
    expect(isBorder({ color: 'red', width: '1px', style: 'solid' })).to.equal(false)
  })

  it('returns false if object has no width', () => {
    expect(isBorder({ color: '#ff0000', style: 'solid' })).to.equal(false)
  })

  it('returns false if width is invalid', () => {
    expect(isBorder({ color: '#ff0000', width: '1em', style: 'solid' })).to.equal(false)
  })

  it('returns false if object has no style', () => {
    expect(isBorder({ color: '#ff0000', width: '1px' })).to.equal(false)
  })

  it('returns false if style is invalid', () => {
    expect(isBorder({ color: '#ff0000', width: '1px', style: 'jazzy' })).to.equal(false)
  })
})
