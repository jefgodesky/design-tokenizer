import { expect } from 'chai'
import { isDerefShadowToken } from './shadow.js'

describe('isDerefShadowToken', () => {
  const $value = { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' }

  it('returns false for undefined', () => {
    expect(isDerefShadowToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefShadowToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefShadowToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefShadowToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefShadowToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefShadowToken(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefShadowToken('0.5rem 0.5rem 1.5rem 0 #00000080')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefShadowToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefShadowToken({})).to.equal(false)
  })

  it('returns true for an object with $type shadow and a valid $value', () => {
    expect(isDerefShadowToken({ $type: 'shadow', $value })).to.equal(true)
  })

  it('returns false for an object with $type shadow and a reference $value', () => {
    expect(isDerefShadowToken({ $type: 'shadow', $value: '{shadow.drop}' })).to.equal(false)
  })

  it('returns false for an object with no $type', () => {
    expect(isDerefShadowToken({ $value })).to.equal(false)
  })

  it('returns false for an object with $type other than shadow', () => {
    expect(isDerefShadowToken({ $type: 'drop-shadow', $value })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDerefShadowToken({ $type: 'shadow' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDerefShadowToken({ $type: 'border', $value: '0.5rem 0.5rem 1.5rem 0 #00000080' })).to.equal(false)
  })
})
