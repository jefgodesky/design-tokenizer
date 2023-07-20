import { expect } from 'chai'
import { isTypographyToken } from './typography.js'

describe('isTypographyToken', () => {
  const $value = {
    fontFamily: ['Helvetica', 'sans-serif'],
    fontSize: '1rem',
    fontWeight: 'normal',
    letterSpacing: '0rem',
    lineHeight: 1.2
  }

  it('returns false for undefined', () => {
    expect(isTypographyToken(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isTypographyToken(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isTypographyToken(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isTypographyToken(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isTypographyToken(undefined)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isTypographyToken(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isTypographyToken('700 0.1px 42px/1.2 Roboto')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isTypographyToken([])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isTypographyToken({})).to.equal(false)
  })

  it('returns true for an object with $type typography and a valid $value', () => {
    expect(isTypographyToken({ $type: 'typography', $value })).to.equal(true)
  })

  it('returns true for an object with a valid font style', () => {
    expect(isTypographyToken({ $type: 'typography', $value: { ...$value, fontStyle: 'italic' } })).to.equal(true)
  })

  it('returns true for an object with $type typography and a reference $value', () => {
    expect(isTypographyToken({ $type: 'typography', $value: '{typography.heading}' })).to.equal(true)
  })

  it('returns false for an object with no $type', () => {
    expect(isTypographyToken({ $value })).to.equal(false)
  })

  it('returns false for an object with $type other than typography', () => {
    expect(isTypographyToken({ $type: 'font', $value })).to.equal(false)
  })

  it('returns false for an object with no $value', () => {
    expect(isTypographyToken({ $type: 'typography' })).to.equal(false)
  })

  it('returns false for an object with invalid $value', () => {
    expect(isTypographyToken({ $type: 'gradient', $value: '700 0.1px 42px/1.2 Roboto' })).to.equal(false)
  })
})
