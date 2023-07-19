import { expect } from 'chai'
import { isDerefTokenList } from './deref-token-list.js'

describe('isDerefTokenList', () => {
  it('rejects undefined', () => {
    expect(isDerefTokenList(undefined)).to.equal(false)
  })

  it('rejects null', () => {
    expect(isDerefTokenList(null)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isDerefTokenList(() => {})).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isDerefTokenList(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isDerefTokenList('test')).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isDerefTokenList([])).to.equal(false)
  })

  it('accepts empty objects', () => {
    expect(isDerefTokenList({})).to.equal(true)
  })

  it('rejects objects with undefined properties', () => {
    expect(isDerefTokenList({ a: undefined })).to.equal(false)
  })

  it('rejects objects with null properties', () => {
    expect(isDerefTokenList({ a: null })).to.equal(false)
  })

  it('rejects objects with function properties', () => {
    expect(isDerefTokenList({ a: () => {} })).to.equal(false)
  })

  it('rejects objects with true properties', () => {
    expect(isDerefTokenList({ a: true })).to.equal(false)
  })

  it('rejects objects with false properties', () => {
    expect(isDerefTokenList({ a: null })).to.equal(false)
  })

  it('rejects objects with numerical properties', () => {
    expect(isDerefTokenList({ a: 1 })).to.equal(false)
  })

  it('rejects objects with string properties', () => {
    expect(isDerefTokenList({ a: 'test' })).to.equal(false)
  })

  it('rejects objects with array properties', () => {
    expect(isDerefTokenList({ a: [] })).to.equal(false)
  })

  it('rejects objects with empty object properties', () => {
    expect(isDerefTokenList({ a: {} })).to.equal(false)
  })

  it('accepts objects with color token properties', () => {
    expect(isDerefTokenList({ 'color.green': { $type: 'color', $value: '#008800' } })).to.equal(true)
  })

  it('rejects objects with color token properties with references', () => {
    expect(isDerefTokenList({ 'color.green': { $type: 'color', $value: '{color.green}' } })).to.equal(false)
  })

  it('rejects objects with invalid color token properties', () => {
    expect(isDerefTokenList({ 'color.green': { $type: 'color', $value: '#080' } })).to.equal(false)
  })

  it('accepts objects with dimension token properties', () => {
    expect(isDerefTokenList({ 'dimension.basic': { $type: 'dimension', $value: '1rem' } })).to.equal(true)
  })

  it('rejects objects with dimension token properties with references', () => {
    expect(isDerefTokenList({ 'dimension.basic': { $type: 'dimension', $value: '{dimension.basic}' } })).to.equal(false)
  })

  it('rejects objects with invalid dimension token properties', () => {
    expect(isDerefTokenList({ 'dimension.basic': { $type: 'dimension', $value: '1em' } })).to.equal(false)
  })

  it('accepts objects with font family token properties', () => {
    expect(isDerefTokenList({ 'font.family.sans': { $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] } })).to.equal(true)
  })

  /**
   * We're asking a bit too much from Typescript to distinguish all the
   * possible font family names from references.
  it('rejects objects with font family token properties with references', () => {
    expect(isDerefTokenList({ 'font.family.sans': { $type: 'fontFamily', $value: '{font.family.sans}' } })).to.equal(false)
  })
   */

  it('rejects objects with invalid font family token properties', () => {
    expect(isDerefTokenList({ 'font.family.sans': { $type: 'fontFamily', $value: 42 } })).to.equal(false)
  })

  it('accepts objects with font weight token properties', () => {
    expect(isDerefTokenList({ 'font.weight.baseline': { $type: 'fontWeight', $value: 'normal' } })).to.equal(true)
  })

  it('rejects objects with font weight token properties with references', () => {
    expect(isDerefTokenList({ 'font.weight.baseline': { $type: 'fontWeight', $value: '{font.weight.baseline}' } })).to.equal(false)
  })

  it('rejects objects with invalid font weight token properties', () => {
    expect(isDerefTokenList({ 'font.weight.chonky': { $type: 'fontWeight', $value: 'chonky' } })).to.equal(false)
  })

  it('accepts objects with duration token properties', () => {
    expect(isDerefTokenList({ 'duration.mid': { $type: 'duration', $value: '1000ms' } })).to.equal(true)
  })

  it('rejects objects with duration token properties with references', () => {
    expect(isDerefTokenList({ 'duration.mid': { $type: 'duration', $value: '{duration.mid}' } })).to.equal(false)
  })

  it('rejects objects with invalid duration token properties', () => {
    expect(isDerefTokenList({ 'duration.mid': { $type: 'duration', $value: '1s' } })).to.equal(false)
  })

  it('accepts objects with cubic bézier token properties', () => {
    expect(isDerefTokenList({ 'curve.flat': { $type: 'cubicBezier', $value: [0, 0, 0, 0] } })).to.equal(true)
  })

  it('rejects objects with cubic bézier token properties with references', () => {
    expect(isDerefTokenList({ 'curve.flat': { $type: 'cubicBezier', $value: '{curve.flat}' } })).to.equal(false)
  })

  it('rejects objects with invalid cubic bézier token properties', () => {
    expect(isDerefTokenList({ 'curve.flat': { $type: 'cubicBezier', $value: [0, 0, 0, 0, 0] } })).to.equal(false)
  })

  it('accepts objects with number token properties', () => {
    expect(isDerefTokenList({ 'number.nil': { $type: 'number', $value: 0 } })).to.equal(true)
  })

  it('rejects objects with number token properties with references', () => {
    expect(isDerefTokenList({ 'number.nil': { $type: 'number', $value: '{number.nil}' } })).to.equal(false)
  })

  it('rejects objects with invalid number token properties', () => {
    expect(isDerefTokenList({ 'number.nil': { $type: 'number', $value: 'zero' } })).to.equal(false)
  })

  it('accepts objects with stroke style (string) token properties', () => {
    expect(isDerefTokenList({ 'stroke style.solid': { $type: 'strokeStyle', $value: 'solid' } })).to.equal(true)
  })

  it('accepts objects with stroke style (object) token properties', () => {
    expect(isDerefTokenList({ 'stroke style.solid': { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } } })).to.equal(true)
  })

  it('rejects objects with stroke style token references', () => {
    expect(isDerefTokenList({ 'stroke style.solid': { $type: 'strokeStyle', $value: '{stroke style.solid}' } })).to.equal(false)
  })

  it('rejects objects with stroke style (object) token properties that includes references', () => {
    expect(isDerefTokenList({ 'stroke style.solid': { $type: 'strokeStyle', $value: { dashArray: ['{spacing.dash.long}', '0.25rem'], lineCap: 'round' } } })).to.equal(false)
  })

  it('rejects objects with invalid stroke style (string) token properties', () => {
    expect(isDerefTokenList({ 'stroke style.solid': { $type: 'strokeStyle', $value: 'jazzy' } })).to.equal(false)
  })

  it('rejects objects with invalid stroke style (object) token properties', () => {
    expect(isDerefTokenList({ 'stroke style.solid': { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'jazzy' } } })).to.equal(false)
  })

  it('accepts objects with border token properties', () => {
    expect(isDerefTokenList({ 'border.basic': { $type: 'border', $value: { color: '#008800', width: '1px', style: 'solid' } } })).to.equal(true)
  })

  it('rejects objects with border token references', () => {
    expect(isDerefTokenList({ 'border.basic': { $type: 'border', $value: '{border.basic}' } })).to.equal(false)
  })

  it('rejects objects with border token properties with references', () => {
    expect(isDerefTokenList({ 'border.basic': { $type: 'border', $value: { color: '{color.green}', width: '1px', style: 'solid' } } })).to.equal(false)
  })

  it('rejects objects with invalid border token properties', () => {
    expect(isDerefTokenList({ 'border.basic': { $type: 'border', $value: { color: '#080', width: '1px', style: 'solid' } } })).to.equal(false)
  })

  it('accepts objects with transition token properties', () => {
    expect(isDerefTokenList({ 'transition.basic': { $type: 'transition', $value: { duration: '200ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } } })).to.equal(true)
  })

  it('rejects objects with transition token references', () => {
    expect(isDerefTokenList({ 'transition.basic': { $type: 'transition', $value: '{transition.basic}' } })).to.equal(false)
  })

  it('rejects objects with transition token properties with references', () => {
    expect(isDerefTokenList({ 'transition.basic': { $type: 'transition', $value: { duration: '200ms', delay: '{duration.instantaneous}', timingFunction: [0, 0, 0, 0] } } })).to.equal(false)
  })

  it('rejects objects with invalid transition token properties', () => {
    expect(isDerefTokenList({ 'transition.basic': { $type: 'transition', $value: { duration: '200ms', delay: '0s', timingFunction: [0, 0, 0, 0] } } })).to.equal(false)
  })

  it('accepts objects with shadow token properties', () => {
    expect(isDerefTokenList({ 'shadow.basic': { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } } })).to.equal(true)
  })

  it('rejects objects with shadow token references', () => {
    expect(isDerefTokenList({ 'shadow.basic': { $type: 'shadow', $value: '{shadow.basic}' } })).to.equal(false)
  })

  it('rejects objects with shadow token properties with references', () => {
    expect(isDerefTokenList({ 'shadow.basic': { $type: 'shadow', $value: { color: '{color.shadow}', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } } })).to.equal(false)
  })

  it('rejects objects with invalid shadow token properties', () => {
    expect(isDerefTokenList({ 'shadow.basic': { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0em' } } })).to.equal(false)
  })

  it('accepts objects with gradient token properties', () => {
    expect(isDerefTokenList({ 'gradient.monochrome': { $type: 'gradient', $value: [{ color: '#000000', position: 0 }, { color: '#ffffff', position: 1 }] } })).to.equal(true)
  })

  it('rejects objects with gradient token references', () => {
    expect(isDerefTokenList({ 'gradient.monochrome': { $type: 'gradient', $value: '{gradient.monochrome}' } })).to.equal(false)
  })

  it('rejects objects with gradient token properties with references', () => {
    expect(isDerefTokenList({ 'gradient.monochrome': { $type: 'gradient', $value: [{ color: '{color.black}', position: 0 }, { color: '#ffffff', position: 1 }] } })).to.equal(false)
  })

  it('rejects objects with invalid gradient token properties', () => {
    expect(isDerefTokenList({ 'gradient.monochrome': { $type: 'gradient', $value: [{ color: '#000', position: 0 }, { color: '#ffffff', position: 1 }] } })).to.equal(false)
  })

  it('accepts objects with typography token properties', () => {
    expect(isDerefTokenList({ 'typography.body': { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } } })).to.equal(true)
  })

  it('rejects objects with typography token references', () => {
    expect(isDerefTokenList({ 'typography.body': { $type: 'typography', $value: '{typography.body}' } })).to.equal(false)
  })

  it('rejects objects with typography token properties with references', () => {
    expect(isDerefTokenList({ 'typography.body': { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '{font.sizes.baseline}', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } } })).to.equal(false)
  })

  it('rejects objects with invalid typography token properties', () => {
    expect(isDerefTokenList({ 'typography.body': { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0em', lineHeight: 1.2 } } })).to.equal(false)
  })
})
