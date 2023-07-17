import { expect } from 'chai'
import { isDictionaryValue } from './dictionary-value.js'

describe('isDictionaryValue', () => {
  it('returns false for undefined', () => {
    expect(isDictionaryValue(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isDictionaryValue(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDictionaryValue(() => {})).to.equal(false)
  })

  it('returns true for true', () => {
    expect(isDictionaryValue(true)).to.equal(true)
  })

  it('returns true for false', () => {
    expect(isDictionaryValue(false)).to.equal(true)
  })

  it('returns true for numbers', () => {
    expect(isDictionaryValue(1)).to.equal(true)
  })

  it('returns true for strings', () => {
    expect(isDictionaryValue('test')).to.equal(true)
  })

  it('returns true for an empty array', () => {
    expect(isDictionaryValue([])).to.equal(true)
  })

  it('returns false for an array of undefined', () => {
    expect(isDictionaryValue([undefined])).to.equal(false)
  })

  it('returns false for an array of null', () => {
    expect(isDictionaryValue([null])).to.equal(false)
  })

  it('returns false for an array of functions', () => {
    expect(isDictionaryValue([() => {}])).to.equal(false)
  })

  it('returns true for an array of booleans', () => {
    expect(isDictionaryValue([true, false])).to.equal(true)
  })

  it('returns true for an array of numbers', () => {
    expect(isDictionaryValue([1, 2, 3])).to.equal(true)
  })

  it('returns true for an array of strings', () => {
    expect(isDictionaryValue(['a', 'b', 'c'])).to.equal(true)
  })

  it('returns true for arrays all the way down', () => {
    expect(isDictionaryValue([[['a'], ['b'], ['c']]])).to.equal(true)
  })

  it('returns true for an empty object', () => {
    expect(isDictionaryValue({})).to.equal(true)
  })

  it('returns true for a proper dictionary', () => {
    expect(isDictionaryValue({ a: 1 })).to.equal(true)
  })

  it('returns false if a dictionary includes reserved keys', () => {
    expect(isDictionaryValue({ $a: 1 })).to.equal(false)
  })

  it('returns true for a nested color token', () => {
    expect(isDictionaryValue({ color: { green: { $type: 'color', $value: '#008800' } } })).to.equal(true)
  })

  it('returns false for a malformed color token', () => {
    expect(isDictionaryValue({ color: { green: { $type: 'color', $value: '#080' } } })).to.equal(false)
  })

  it('returns true for a nested dimension token', () => {
    expect(isDictionaryValue({ spacing: { vertical: { $type: 'dimension', $value: '1rem' } } })).to.equal(true)
  })

  it('returns false for a malformed dimension token', () => {
    expect(isDictionaryValue({ spacing: { vertical: { $type: 'dimension', $value: '1em' } } })).to.equal(false)
  })

  it('returns true for a nested font family token', () => {
    expect(isDictionaryValue({ font: { basic: { $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] } } })).to.equal(true)
  })

  it('returns false for a malformed font family token', () => {
    expect(isDictionaryValue({ font: { basic: { $type: 'font-family', $value: ['Helvetica', 'sans-serif'] } } })).to.equal(false)
  })

  it('returns true for a nested font weight token', () => {
    expect(isDictionaryValue({ weight: { normal: { $type: 'fontWeight', $value: 'normal' } } })).to.equal(true)
  })

  it('returns false for a malformed font weight token', () => {
    expect(isDictionaryValue({ weight: { normal: { $type: 'font-weight', $value: 'normal' } } })).to.equal(false)
  })

  it('returns true for a nested duration token', () => {
    expect(isDictionaryValue({ duration: { mid: { $type: 'duration', $value: '1000ms' } } })).to.equal(true)
  })

  it('returns false for a malformed duration token', () => {
    expect(isDictionaryValue({ duration: { mid: { $type: 'duration', $value: '1s' } } })).to.equal(false)
  })

  it('returns true for a nested cubic bézier token', () => {
    expect(isDictionaryValue({ curves: { flat: { $type: 'cubicBezier', $value: [0, 0, 0, 0] } } })).to.equal(true)
  })

  it('returns false for a malformed cubic bézier token', () => {
    expect(isDictionaryValue({ curves: { flat: { $type: 'cubic-bezier', $value: [0, 0, 0, 0] } } })).to.equal(false)
  })

  it('returns true for a nested number token', () => {
    expect(isDictionaryValue({ numbers: { loneliest: { $type: 'number', $value: 1 } } })).to.equal(true)
  })

  it('returns false for a malformed number token', () => {
    expect(isDictionaryValue({ numbers: { loneliest: { $type: 'number', $value: 'one' } } })).to.equal(false)
  })

  it('returns true for a nested stroke style string token', () => {
    expect(isDictionaryValue({ stroke: { basic: { $type: 'strokeStyle', $value: 'dashed' } } })).to.equal(true)
  })

  it('returns false for a malformed stroke style string token', () => {
    expect(isDictionaryValue({ stroke: { loneliest: { $type: 'strokeStyle', $value: 'dashing' } } })).to.equal(false)
  })

  it('returns true for a nested stroke style object token', () => {
    expect(isDictionaryValue({ stroke: { basic: { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } } } })).to.equal(true)
  })

  it('returns false for a malformed stroke style object token', () => {
    expect(isDictionaryValue({ stroke: { basic: { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'pop' } } } })).to.equal(false)
  })

  it('returns true for a nested border token', () => {
    expect(isDictionaryValue({ stroke: { basic: { $type: 'border', $value: { color: '#008800', width: '1px', style: 'solid' } } } })).to.equal(true)
  })

  it('returns false for a malformed border token', () => {
    expect(isDictionaryValue({ stroke: { basic: { $type: 'border', $value: { color: '#008800', width: '1px', style: 'jazzy' } } } })).to.equal(false)
  })

  it('returns true for a nested transition token', () => {
    expect(isDictionaryValue({ transition: { mid: { $type: 'transition', $value: { duration: '1000ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } } } })).to.equal(true)
  })

  it('returns false for a malformed transition token', () => {
    expect(isDictionaryValue({ transition: { mid: { $type: 'transition', $value: { duration: '1000ms', delay: '0s', timingFunction: [0, 0, 0, 0] } } } })).to.equal(false)
  })

  it('returns true for a nested shadow token', () => {
    expect(isDictionaryValue({ shadow: { basic: { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } } } })).to.equal(true)
  })

  it('returns false for a malformed shadow token', () => {
    expect(isDictionaryValue({ shadow: { basic: { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: 0 } } } })).to.equal(false)
  })

  it('returns true for a nested gradient token', () => {
    expect(isDictionaryValue({ gradient: { monochrome: { $type: 'gradient', $value: [{ color: '#000000', position: 0 }, { color: '#ffffff', position: 1 }] } } })).to.equal(true)
  })

  it('returns false for a malformed gradient token', () => {
    expect(isDictionaryValue({ gradient: { monochrome: { $type: 'gradient', $value: [{ color: '#000', position: 0 }, { color: '#ffffff', position: 1 }] } } })).to.equal(false)
  })

  it('returns true for a nested typography token', () => {
    expect(isDictionaryValue({ gradient: { monochrome: { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } } } })).to.equal(true)
  })

  it('returns false for a malformed gradient token', () => {
    expect(isDictionaryValue({ gradient: { monochrome: { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: 0, lineHeight: 1.2 } } } })).to.equal(false)
  })
})
