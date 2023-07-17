import { expect } from 'chai'
import { isDerefShadow } from './shadow.js'

describe('isDerefShadow', () => {
  it('returns false for undefined', () => {
    expect(isDerefShadow(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefShadow(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefShadow(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefShadow(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefShadow(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefShadow(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefShadow('0.5rem 0.5rem 1.5rem 0rem #00000080')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefShadow([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefShadow({})).to.equal(false)
  })

  it('returns true for an object with color, offsetX, offsetY, blur, and spread properties', () => {
    expect(isDerefShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(true)
  })

  it('returns false for an object with a color reference', () => {
    expect(isDerefShadow({ color: '{color.shadow}', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with an offset X reference', () => {
    expect(isDerefShadow({ color: '#00000080', offsetX: '{spacing.shadow.x}', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with an offset Y reference', () => {
    expect(isDerefShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '{spacing.shadow.y}', blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with a blur reference', () => {
    expect(isDerefShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '{spacing.shadow.blur}', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with a spread reference', () => {
    expect(isDerefShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '{spacing.shadow.spread}' })).to.equal(false)
  })

  it('returns false for an object with no color', () => {
    expect(isDerefShadow({ offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with invalid color', () => {
    expect(isDerefShadow({ color: 'black', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with no offsetX', () => {
    expect(isDerefShadow({ color: '#00000080', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with invalid offsetX', () => {
    expect(isDerefShadow({ color: '#00000080', offsetX: 0.5, offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with no offsetY', () => {
    expect(isDerefShadow({ color: '#00000080', offsetX: '0.5rem', blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with invalid offsetY', () => {
    expect(isDerefShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: 0.5, blur: '1.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with no blur', () => {
    expect(isDerefShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with invalid blur', () => {
    expect(isDerefShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: 1.5, spread: '0rem' })).to.equal(false)
  })

  it('returns false for an object with cno spread', () => {
    expect(isDerefShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem' })).to.equal(false)
  })

  it('returns false for an object with invalid spread', () => {
    expect(isDerefShadow({ color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: 0 })).to.equal(false)
  })
})
