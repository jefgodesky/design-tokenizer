import { expect } from 'chai'
import { isGroup } from './group.js'

describe('isGroup', () => {
  it('rejects undefined', () => {
    expect(isGroup(undefined)).to.equal(false)
  })

  it('rejects null', () => {
    expect(isGroup(null)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isGroup(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isGroup(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isGroup(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isGroup(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isGroup('test')).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isGroup([])).to.equal(false)
  })

  it('accepts an empty object', () => {
    expect(isGroup({})).to.equal(true)
  })

  it('accepts most objects', () => {
    expect(isGroup({ a: { b: 2 } })).to.equal(true)
  })

  it('rejects objects with reserved property names', () => {
    expect(isGroup({ a: { $nope: true } })).to.equal(false)
  })

  it('rejects objects with reserved property names', () => {
    expect(isGroup({ a: { $nope: true } })).to.equal(false)
  })

  it('accepts color tokens', () => {
    expect(isGroup({ color: { green: { $type: 'color', $value: '#008800' } } })).to.equal(true)
  })

  it('accepts color references', () => {
    expect(isGroup({ color: { green: { $type: 'color', $value: '{color.green}' } } })).to.equal(true)
  })

  it('rejects invalid color tokens', () => {
    expect(isGroup({ color: { green: { $type: 'color', $value: '#080' } } })).to.equal(false)
  })

  it('accepts dimension tokens', () => {
    expect(isGroup({ spacing: { vertical: { $type: 'dimension', $value: '1rem' } } })).to.equal(true)
  })

  it('accepts dimension references', () => {
    expect(isGroup({ spacing: { vertical: { $type: 'dimension', $value: '{spacing.vertical}' } } })).to.equal(true)
  })

  it('rejects invalid dimension tokens', () => {
    expect(isGroup({ spacing: { vertical: { $type: 'dimension', $value: '1em' } } })).to.equal(false)
  })

  it('accepts font family tokens', () => {
    expect(isGroup({ fontFamily: { sans: { $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] } } })).to.equal(true)
  })

  it('accepts font family references', () => {
    expect(isGroup({ fontFamily: { sans: { $type: 'fontFamily', $value: '{fontFamily.sans}' } } })).to.equal(true)
  })

  it('rejects invalid font family tokens', () => {
    expect(isGroup({ fontFamily: { sans: { $type: 'fontFamily', $value: 1 } } })).to.equal(false)
  })

  it('accepts font weight tokens', () => {
    expect(isGroup({ fontWeight: { normal: { $type: 'fontWeight', $value: 'normal' } } })).to.equal(true)
  })

  it('accepts font weight references', () => {
    expect(isGroup({ fontWeight: { normal: { $type: 'fontWeight', $value: '{fontWeight.normal}' } } })).to.equal(true)
  })

  it('rejects invalid font weight tokens', () => {
    expect(isGroup({ fontWeight: { chonky: { $type: 'fontWeight', $value: 'chonky' } } })).to.equal(false)
  })

  it('accepts duration tokens', () => {
    expect(isGroup({ duration: { mid: { $type: 'duration', $value: '1000ms' } } })).to.equal(true)
  })

  it('accepts duration references', () => {
    expect(isGroup({ duration: { mid: { $type: 'duration', $value: '{duration.mid}' } } })).to.equal(true)
  })

  it('rejects invalid duration tokens', () => {
    expect(isGroup({ duration: { mid: { $type: 'duration', $value: '1s' } } })).to.equal(false)
  })

  it('accepts cubic bézier tokens', () => {
    expect(isGroup({ curves: { flat: { $type: 'cubicBezier', $value: [0, 0, 0, 0] } } })).to.equal(true)
  })

  it('accepts cubic bézier references', () => {
    expect(isGroup({ curves: { flat: { $type: 'cubicBezier', $value: '{curves.flat}' } } })).to.equal(true)
  })

  it('rejects invalid cubic bézier tokens', () => {
    expect(isGroup({ curves: { flat: { $type: 'cubicBezier', $value: [0, 0, 0, 0, 0] } } })).to.equal(false)
  })

  it('accepts numbers tokens', () => {
    expect(isGroup({ number: { nil: { $type: 'number', $value: 0 } } })).to.equal(true)
  })

  it('accepts numbers references', () => {
    expect(isGroup({ number: { nil: { $type: 'number', $value: '{number.nil}' } } })).to.equal(true)
  })

  it('rejects invalid numbers tokens', () => {
    expect(isGroup({ number: { nil: { $type: 'number', $value: 'zero' } } })).to.equal(false)
  })

  it('accepts stroke style string tokens', () => {
    expect(isGroup({ stroke: { solid: { $type: 'strokeStyle', $value: 'solid' } } })).to.equal(true)
  })

  it('accepts stroke style object tokens', () => {
    expect(isGroup({ stroke: { custom: { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } } } })).to.equal(true)
  })

  it('accepts stroke style string references', () => {
    expect(isGroup({ stroke: { alias: { $type: 'strokeStyle', $value: '{stroke.solid}' } } })).to.equal(true)
  })

  it('accepts stroke style object tokens with references', () => {
    expect(isGroup({ stroke: { custom: { $type: 'strokeStyle', $value: { dashArray: ['{spacing.dash.long}', '{spacing.dash.short}'], lineCap: 'round' } } } })).to.equal(true)
  })

  it('rejects invalid stroke style string tokens', () => {
    expect(isGroup({ stroke: { jazzy: { $type: 'strokeStyle', $value: 'jazzy' } } })).to.equal(false)
  })

  it('rejects invalid stroke style object tokens', () => {
    expect(isGroup({ stroke: { cool: { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'cool' } } } })).to.equal(false)
  })

  it('accepts border tokens', () => {
    expect(isGroup({ border: { basic: { $type: 'border', $value: { color: '#008800', width: '1px', style: 'solid' } } } })).to.equal(true)
  })

  it('accepts border references', () => {
    expect(isGroup({ border: { basic: { $type: 'border', $value: '{border.basic}' } } })).to.equal(true)
  })

  it('accepts border tokens with references', () => {
    expect(isGroup({ border: { basic: { $type: 'border', $value: { color: '{color.green}', width: '{spacing.hairline}', style: '{stroke.solid}' } } } })).to.equal(true)
  })

  it('rejects invalid border tokens', () => {
    expect(isGroup({ border: { basic: { $type: 'border', $value: { color: '#080', width: '1px', style: 'solid' } } } })).to.equal(false)
  })

  it('accepts transition tokens', () => {
    expect(isGroup({ transition: { long: { $type: 'transition', $value: { duration: '1000ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } } } })).to.equal(true)
  })

  it('accepts transition references', () => {
    expect(isGroup({ transition: { long: { $type: 'transition', $value: '{transition.long}' } } })).to.equal(true)
  })

  it('accepts transition tokens with references', () => {
    expect(isGroup({ transition: { long: { $type: 'transition', $value: { duration: '{duration.mid}', delay: '{duration.instantaneous}', timingFunction: '{curves.flat}' } } } })).to.equal(true)
  })

  it('rejects invalid transition tokens', () => {
    expect(isGroup({ transition: { long: { $type: 'transition', $value: { duration: '1000ms', delay: 0, timingFunction: [0, 0, 0, 0] } } } })).to.equal(false)
  })

  it('accepts shadow tokens', () => {
    expect(isGroup({ shadow: { basic: { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } } } })).to.equal(true)
  })

  it('accepts shadow references', () => {
    expect(isGroup({ shadow: { basic: { $type: 'shadow', $value: '{shadow.basic}' } } })).to.equal(true)
  })

  it('accepts shadow tokens with references', () => {
    expect(isGroup({ shadow: { basic: { $type: 'shadow', $value: { color: '{color.shadow}', offsetX: '{spacing.shadow.offset}', offsetY: '{spacing.shadow.offset}', blur: '{spacing.shadow.blur}', spread: '{spacing.shadow.spread}' } } } })).to.equal(true)
  })

  it('rejects invalid shadow tokens', () => {
    expect(isGroup({ shadow: { basic: { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0em' } } } })).to.equal(false)
  })

  it('accepts gradient tokens', () => {
    expect(isGroup({ gradient: { monochrome: { $type: 'gradient', $value: [{ color: '#000000', position: 0 }, { color: '#ffffff', position: 1 }] } } })).to.equal(true)
  })

  it('accepts gradient references', () => {
    expect(isGroup({ gradient: { monochrome: { $type: 'gradient', $value: '{gradient.monochrome}' } } })).to.equal(true)
  })

  it('accepts gradient tokens with references', () => {
    expect(isGroup({ gradient: { monochrome: { $type: 'gradient', $value: [{ color: '{color.black}', position: '{number.nil}' }, { color: '{color.white}', position: '{number.loneliest}' }] } } })).to.equal(true)
  })

  it('rejects invalid gradient tokens', () => {
    expect(isGroup({ gradient: { monochrome: { $type: 'gradient', $value: [{ color: '#000', position: 0 }, { color: '#ffffff', position: 1 }] } } })).to.equal(false)
  })

  it('accepts typography tokens', () => {
    expect(isGroup({ typography: { sans: { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0px', lineHeight: 1.2 } } } })).to.equal(true)
  })

  it('accepts typography reference', () => {
    expect(isGroup({ typography: { sans: { $type: 'typography', $value: '{typography.sans}' } } })).to.equal(true)
  })

  it('accepts typography tokens with references', () => {
    expect(isGroup({ typography: { sans: { $type: 'typography', $value: { fontFamily: '{typography.family.sans}', fontSize: '{typography.size.base}', fontWeight: '{typography.weight.baseline}', letterSpacing: '{typography.spacing.letter}', lineHeight: '{typography.spacing.line}' } } } })).to.equal(true)
  })

  it('rejects invalid typography tokens', () => {
    expect(isGroup({ typography: { sans: { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: 0, lineHeight: 1.2 } } } })).to.equal(false)
  })
})
