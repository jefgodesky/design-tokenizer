import { expect } from 'chai'
import { isShadow } from './shadow.js'

describe('isShadow', () => {
  it('returns false for undefined', () => {
    expect(isShadow(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isShadow(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isShadow(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isShadow(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isShadow(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isShadow(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isShadow('0.5rem 0.5rem 1.5rem 0rem #00000080')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isShadow([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isShadow({})).to.equal(false)
  })

  it('returns true for an object with color, offsetX, offsetY, blur, and spread properties', () => {
    expect(isShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(true)
  })

  it('returns true for an object with a color reference', () => {
    expect(isShadow({ color: '{color.shadow}', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(true)
  })

  it('returns true for an object with an offset X reference', () => {
    expect(isShadow({ color: '#00000080', offsetX: '{spacing.shadow.x}', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(true)
  })

  it('returns true for an object with an offset Y reference', () => {
    expect(isShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '{spacing.shadow.y}', blur: '1.5rem', spread: '0rem' })).to.equal(true)
  })

  it('returns true for an object with a blur reference', () => {
    expect(isShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '{spacing.shadow.blur}', spread: '0rem' })).to.equal(true)
  })

  it('returns true for an object with a spread reference', () => {
    expect(isShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '{spacing.shadow.spread}' })).to.equal(true)
  })

  it('returns false for an object with no color', () => {
    expect(isShadow({ offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with invalid color', () => {
    expect(isShadow({ color: 'black', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with no offsetX', () => {
    expect(isShadow({ color: '#00000080', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with invalid offsetX', () => {
    expect(isShadow({ color: '#00000080', offsetX: 0.5, offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with no offsetY', () => {
    expect(isShadow({ color: '#00000080', offsetX: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with invalid offsetY', () => {
    expect(isShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: 0.5, blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with no blur', () => {
    expect(isShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with invalid blur', () => {
    expect(isShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: 1.5, spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with cno spread', () => {
    expect(isShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem' })).to.equal(false)
  })

  it('returns false for an object with invalid spread', () => {
    expect(isShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: 0 })).to.equal(false)
  })
})
