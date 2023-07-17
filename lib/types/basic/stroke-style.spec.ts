import { expect } from 'chai'
import { isStrokeStyleString, strokeStyles } from './stroke-style.js'

describe('isStrokeStyleString', () => {
  it('returns false for undefined', () => {
    expect(isStrokeStyleString(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isStrokeStyleString(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isStrokeStyleString(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isStrokeStyleString(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isStrokeStyleString(false)).to.equal(false)
  })

  it('returns true for a valid string', () => {
    const checks = strokeStyles.map(style => isStrokeStyleString(style))
    expect(checks.reduce((acc, curr) => acc && curr, true)).to.equal(true)
  })

  it('returns false for any other string', () => {
    expect(isStrokeStyleString('nope')).to.equal(false)
  })

  it('returns false for an empty array', () => {
    expect(isStrokeStyleString([])).to.equal(false)
  })

  it('returns false for an array of valid stroke style strings', () => {
    expect(isStrokeStyleString(['solid'])).to.equal(false)
  })

  it('returns false for an empty object', () => {
    expect(isStrokeStyleString({})).to.equal(false)
  })

  it('returns false for an object with a valid stroke style property', () => {
    expect(isStrokeStyleString({ style: 'solid' })).to.equal(false)
  })
})
