import { expect } from 'chai'
import { isDerefTypographyToken } from './typography.js'

describe('isDerefTypographyToken', () => {
  const $value = {
    fontFamily: ['Helvetica', 'sans-serif'],
    fontSize: '1rem',
    fontWeight: 'normal',
    letterSpacing: '0rem',
    lineHeight: 1.2
  }

  it('returns false for undefined', () => {
    expect(isDerefTypographyToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDerefTypographyToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDerefTypographyToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isDerefTypographyToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isDerefTypographyToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDerefTypographyToken(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isDerefTypographyToken('700 0.1px 42px/1.2 Roboto')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isDerefTypographyToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isDerefTypographyToken({})).to.equal(false)
  })

  it('returns true for an object with $type typography and a valid $value', () => {
    expect(isDerefTypographyToken({ $type: 'typography', $value })).to.equal(true)
  })

  it('returns true for an object with a valid font style', () => {
    expect(isDerefTypographyToken({ $type: 'typography', $value: { ...$value, fontStyle: 'italic' } })).to.equal(true)
  })

  it('returns false for an object with $type typography and a reference $value', () => {
    expect(isDerefTypographyToken({ $type: 'typography', $value: '{typography.heading}' })).to.equal(false)
  })

  it('returns false for an object with no $type', () => {
    expect(isDerefTypographyToken({ $value })).to.equal(false)
  })

  it('returns false for an object with $type other than typography', () => {
    expect(isDerefTypographyToken({ $type: 'font', $value })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isDerefTypographyToken({ $type: 'typography' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isDerefTypographyToken({ $type: 'gradient', $value: '700 0.1px 42px/1.2 Roboto' })).to.equal(false)
  })
})
