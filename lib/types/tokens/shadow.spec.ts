import { expect } from 'chai'
import { isShadowToken } from './shadow.js'

describe('isShadowToken', () => {
  const $value = { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' }

  it('returns false for undefined', () => {
    expect(isShadowToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isShadowToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isShadowToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isShadowToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isShadowToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isShadowToken(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isShadowToken('0.5rem 0.5rem 1.5rem 0 #00000080')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isShadowToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isShadowToken({})).to.equal(false)
  })

  it('returns true for an object with $type shadow and a valid $value', () => {
    expect(isShadowToken({ $type: 'shadow', $value })).to.equal(true)
  })

  it('returns true for an object with $type shadow and a reference $value', () => {
    expect(isShadowToken({ $type: 'shadow', $value: '{shadow.drop}' })).to.equal(true)
  })

  it('returns false for an object with no $type', () => {
    expect(isShadowToken({ $value })).to.equal(false)
  })

  it('returns false for an object with $type other than shadow', () => {
    expect(isShadowToken({ $type: 'drop-shadow', $value })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isShadowToken({ $type: 'shadow' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isShadowToken({ $type: 'border', $value: '0.5rem 0.5rem 1.5rem 0 #00000080' })).to.equal(false)
  })
})
