import { expect } from 'chai'
import { isColorToken } from './color.js'

describe('isColorToken', () => {
  it('returns false for undefined', () => {
    expect(isColorToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isColorToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isColorToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isColorToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isColorToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isColorToken(0)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isColorToken('#ff0000')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isColorToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isColorToken({})).to.equal(false)
  })

  it('returns true for an object with $type color and a valid $value', () => {
    expect(isColorToken({ $type: 'color', $value: '#ff0000' })).to.equal(true)
  })

  it('returns true for an object with $type color and a reference $value', () => {
    expect(isColorToken({ $type: 'color', $value: '{color.red}' })).to.equal(true)
  })

  it('returns false for an object with no $type', () => {
    expect(isColorToken({ $value: '#ff0000' })).to.equal(false)
  })

  it('returns false for an object with $type other than color', () => {
    expect(isColorToken({ $type: 'colour', $value: '#ff0000' })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isColorToken({ $type: 'color' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isColorToken({ $type: 'color', $value: 'red' })).to.equal(false)
  })
})
