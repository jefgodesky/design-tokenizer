import { expect } from 'chai'
import { isValue } from './value.js'

describe('isValue', () => {
  it('rejects null', () => {
    expect(isValue(null)).to.equal(false)
  })

  it('rejects true', () => {
    expect(isValue(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isValue(false)).to.equal(false)
  })

  it('accepts numbers', () => {
    expect(isValue(0)).to.equal(true)
  })

  it('accepts strings', () => {
    expect(isValue('')).to.equal(true)
  })

  it('accepts a color hex', () => {
    expect(isValue('#000000')).to.equal(true)
  })

  it('accepts a dimension in px', () => {
    expect(isValue('10px')).to.equal(true)
  })

  it('accepts a dimension in rem', () => {
    expect(isValue('10rem')).to.equal(true)
  })

  it('accepts a duration in ms', () => {
    expect(isValue('10ms')).to.equal(true)
  })

  it('rejects arbitrary objects', () => {
    expect(isValue({})).to.equal(false)
  })

  it('accepts borders', () => {
    expect(isValue({ color: '#000000', width: '1px', style: 'solid' })).to.equal(true)
  })

  it('accepts shadows', () => {
    const shadow = { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' }
    expect(isValue(shadow)).to.equal(true)
  })

  it('accepts stroke styles', () => {
    const strokeStyle = { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' }
    expect(isValue(strokeStyle)).to.equal(true)
  })

  it('accepts transitions', () => {
    const transition = { duration: '200ms', delay: '0ms', timingFunction: [0.5, 0, 1, 1] }
    expect(isValue(transition)).to.equal(true)
  })

  it('accepts typography', () => {
    const typography = { fontFamily: 'Arial', fontSize: '1rem', fontStyle: 'italic', fontWeight: 'bold', lineHeight: 1.25, letterSpacing: '0rem' }
    expect(isValue(typography)).to.equal(true)
  })

  it('accepts an empty array', () => {
    expect(isValue([])).to.equal(true)
  })

  it('accepts an array of four numbers', () => {
    expect(isValue([0, 0, 0, 0])).to.equal(true)
  })

  it('rejects an array with 1-3, or 5+ numbers', () => {
    expect(isValue([0])).to.equal(false)
    expect(isValue([0, 0])).to.equal(false)
    expect(isValue([0, 0, 0])).to.equal(false)
    expect(isValue([0, 0, 0, 0, 0])).to.equal(false)
    expect(isValue([0, 0, 0, 0, 0, 0])).to.equal(false)
  })

  it('accepts an array of gradient stops', () => {
    const gradientStops = [{ color: '#000000', position: 0 }, { color: '#ffffff', position: 1 }]
    expect(isValue(gradientStops)).to.equal(true)
  })
})
