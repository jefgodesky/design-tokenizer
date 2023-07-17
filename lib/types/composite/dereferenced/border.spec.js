/* global describe, it */

import { expect } from 'chai'
import { isDerefBorder } from './border.js'

describe('isDerefBorder', () => {
  it('returns false for undefined', () => {
    expect(isDerefBorder(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefBorder(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefBorder(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefBorder(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefBorder(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefBorder(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefBorder('1px solid #ff0000')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefBorder([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefBorder({})).to.equal(false)
  })

  it('returns true for an object with color, width, and style', () => {
    expect(isDerefBorder({ color: '#008800', width: '1px', style: 'solid' })).to.equal(true)
  })

  it('returns false for an object with a reference for color', () => {
    expect(isDerefBorder({ color: '{color.green}', width: '1px', style: 'solid' })).to.equal(false)
  })

  it('returns false for an object with a reference for width', () => {
    expect(isDerefBorder({ color: '#008800', width: '{width.border}', style: 'solid' })).to.equal(false)
  })

  it('returns false for an object with a reference for style', () => {
    expect(isDerefBorder({ color: '#008800', width: '1px', style: '{strokeStyle.border}' })).to.equal(false)
  })

  it('returns false if object has no color', () => {
    expect(isDerefBorder({ width: '1px', style: 'solid' })).to.equal(false)
  })

  it('returns false if color is invalid', () => {
    expect(isDerefBorder({ color: 'red', width: '1px', style: 'solid' })).to.equal(false)
  })

  it('returns false if object has no width', () => {
    expect(isDerefBorder({ color: '#ff0000', style: 'solid' })).to.equal(false)
  })

  it('returns false if width is invalid', () => {
    expect(isDerefBorder({ color: '#ff0000', width: '1em', style: 'solid' })).to.equal(false)
  })

  it('returns false if object has no style', () => {
    expect(isDerefBorder({ color: '#ff0000', width: '1px' })).to.equal(false)
  })

  it('returns false if style is invalid', () => {
    expect(isDerefBorder({ color: '#ff0000', width: '1px', style: 'jazzy' })).to.equal(false)
  })
})
