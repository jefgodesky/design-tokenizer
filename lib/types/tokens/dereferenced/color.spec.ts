import { expect } from 'chai'
import { isDerefColorToken } from './color.js'

describe('isDerefColorToken', () => {
  it('returns false for undefined', () => {
    expect(isDerefColorToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefColorToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefColorToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefColorToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefColorToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefColorToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefColorToken('#ff0000')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefColorToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefColorToken({})).to.equal(false)
  })

  it('returns true for an object with $type color and a valid $value', () => {
    expect(isDerefColorToken({ $type: 'color', $value: '#ff0000' })).to.equal(true)
  })

  it('returns true for an object with $type color and a valid $value', () => {
    expect(isDerefColorToken({ $type: 'color', $value: '#ff0000' })).to.equal(true)
  })

  it('returns false for an object with $type color and a reference $value', () => {
    expect(isDerefColorToken({ $type: 'color', $value: '{color.red}' })).to.equal(false)
  })

  it('returns false for an object with no $type', () => {
    expect(isDerefColorToken({ $value: '#ff0000' })).to.equal(false)
  })

  it('returns false for an object with $type other than color', () => {
    expect(isDerefColorToken({ $type: 'colour', $value: '#ff0000' })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDerefColorToken({ $type: 'color' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDerefColorToken({ $type: 'color', $value: 'red' })).to.equal(false)
  })
})
