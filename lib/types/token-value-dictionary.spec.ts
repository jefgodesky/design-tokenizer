import { expect } from 'chai'
import { isTokenValueDictionary } from './token-value-dictionary.js'

describe('isTokenValueDictionary', () => {
  it('returns false for undefined', () => {
    expect(isTokenValueDictionary(undefined)).to.equal(false)
  })

  it('returns false for null', () => {
    expect(isTokenValueDictionary(null)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isTokenValueDictionary(() => {})).to.equal(false)
  })

  it('returns false for true', () => {
    expect(isTokenValueDictionary(true)).to.equal(false)
  })

  it('returns false for false', () => {
    expect(isTokenValueDictionary(false)).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isTokenValueDictionary(1)).to.equal(false)
  })

  it('returns false for strings', () => {
    expect(isTokenValueDictionary('{"color":{"red":{"$type":"color","$value":"#ff0000"}}}')).to.equal(false)
  })

  it('returns false for arrays', () => {
    expect(isTokenValueDictionary([])).to.equal(false)
  })

  it('returns true for an empty object', () => {
    expect(isTokenValueDictionary({})).to.equal(true)
  })

  it('returns false for an object that includes a reserved property', () => {
    expect(isTokenValueDictionary({ $a: { $type: 'color', $value: '#008800' } })).to.equal(false)
  })

  it('returns true for an object that includes color tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'color', $value: '#008800' } })).to.equal(true)
  })

  it('returns false for an object that includes color token references', () => {
    expect(isTokenValueDictionary({ a: { $type: 'color', $value: '{color.green}' } })).to.equal(false)
  })

  it('returns false for an object that includes invalid color tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'color', $value: '#080' } })).to.equal(false)
  })

  it('returns true for an object that includes dimension tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'dimension', $value: '#1rem' } })).to.equal(true)
  })

  it('returns false for an object that includes dimension token references', () => {
    expect(isTokenValueDictionary({ a: { $type: 'dimension', $value: '{spacing.vertical}' } })).to.equal(false)
  })

  it('returns false for an object that includes invalid dimension tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'dimension', $value: '1em' } })).to.equal(false)
  })

  it('returns true for an object that includes font family tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'fontFamily', $value: 'Helvetica' } })).to.equal(true)
  })

  it('returns false for an object that includes font family token references', () => {
    expect(isTokenValueDictionary({ a: { $type: 'fontFamily', $value: '{font.family.base}' } })).to.equal(false)
  })

  it('returns false for an object that includes invalid font family tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'font-family', $value: 'Helvetica' } })).to.equal(false)
  })

  it('returns true for an object that includes font weight tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'fontWeight', $value: 'normal' } })).to.equal(true)
  })

  it('returns false for an object that includes font weight token references', () => {
    expect(isTokenValueDictionary({ a: { $type: 'fontWeight', $value: '{font.weight.baseline}' } })).to.equal(false)
  })

  it('returns false for an object that includes invalid font weight tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'fontWeight', $value: 'chonky' } })).to.equal(false)
  })

  it('returns true for an object that includes duration tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'duration', $value: '1000ms' } })).to.equal(true)
  })

  it('returns false for an object that includes duration token references', () => {
    expect(isTokenValueDictionary({ a: { $type: 'duration', $value: '{duration.mid}' } })).to.equal(false)
  })

  it('returns false for an object that includes invalid duration tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'duration', $value: '1s' } })).to.equal(false)
  })

  it('returns true for an object that includes cubic bézier tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'cubicBezier', $value: [0, 0, 0, 0] } })).to.equal(true)
  })

  it('returns false for an object that includes cubic bézier token references', () => {
    expect(isTokenValueDictionary({ a: { $type: 'cubicBezier', $value: '{curves.flat}' } })).to.equal(false)
  })

  it('returns false for an object that includes invalid cubic bézier tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'cubicBezier', $value: [0, 0, 0, 0, 0] } })).to.equal(false)
  })

  it('returns true for an object that includes number tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'number', $value: 1 } })).to.equal(true)
  })

  it('returns false for an object that includes number token references', () => {
    expect(isTokenValueDictionary({ a: { $type: 'number', $value: '{number.magic.loneliest}' } })).to.equal(false)
  })

  it('returns false for an object that includes invalid number tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'number', $value: '1' } })).to.equal(false)
  })

  it('returns true for an object that includes stroke style string tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'strokeStyle', $value: 'solid' } })).to.equal(true)
  })

  it('returns true for an object that includes stroke style object tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } } })).to.equal(true)
  })

  it('returns false for an object that includes stroke style token references', () => {
    expect(isTokenValueDictionary({ a: { $type: 'strokeStyle', $value: '{strokeStyle.basic}' } })).to.equal(false)
  })

  it('returns false for an object that includes invalid strokeStyle tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'strokeStyle', $value: 'jazzy' } })).to.equal(false)
  })

  it('returns true for an object that includes border tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'border', $value: { color: '#008800', width: '1px', style: 'solid' } } })).to.equal(true)
  })

  it('returns false for an object that includes border token references', () => {
    expect(isTokenValueDictionary({ a: { $type: 'border', $value: '{border.basic}' } })).to.equal(false)
  })

  it('returns false for an object that includes invalid border tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'border', $value: { color: '#080', width: '1px', style: 'solid' } } })).to.equal(false)
  })

  it('returns true for an object that includes transition tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'transition', $value: { duration: '1000ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } } })).to.equal(true)
  })

  it('returns false for an object that includes transition token references', () => {
    expect(isTokenValueDictionary({ a: { $type: 'transition', $value: '{transition.basic}' } })).to.equal(false)
  })

  it('returns false for an object that includes invalid transition tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'transition', $value: { duration: '1000ms', delay: 0, timingFunction: [0, 0, 0, 0] } } })).to.equal(false)
  })

  it('returns true for an object that includes shadow tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } } })).to.equal(true)
  })

  it('returns false for an object that includes shadow token references', () => {
    expect(isTokenValueDictionary({ a: { $type: 'shadow', $value: '{shadow.drop}' } })).to.equal(false)
  })

  it('returns false for an object that includes invalid shadow tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: 0 } } })).to.equal(false)
  })

  it('returns true for an object that includes gradient tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'gradient', $value: [{ color: '#000000', position: 0 }, { color: '#ffffff', position: 1 }] } })).to.equal(true)
  })

  it('returns false for an object that includes gradient token references', () => {
    expect(isTokenValueDictionary({ a: { $type: 'gradient', $value: '{gradient.monochrome}' } })).to.equal(false)
  })

  it('returns false for an object that includes invalid gradient tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'gradient', $value: [{ color: '#000', position: 0 }, { color: '#ffffff', position: 1 }] } })).to.equal(false)
  })

  it('returns true for an object that includes typography tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'typography', $value: { fontFamily: 'Helvetica', fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } } })).to.equal(true)
  })

  /**
   * Trying to differentiate a reference from all the possible font family
   * names is probably asking a bit too much from Typescript.
  it('returns false for an object that includes typography token references', () => {
    expect(isTokenValueDictionary({ a: { $type: 'typography', $value: { fontFamily: '{font.family.sans}', fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } } })).to.equal(false)
  })
   */

  it('returns false for an object that includes invalid typography tokens', () => {
    expect(isTokenValueDictionary({ a: { $type: 'typography', $value: { fontFamily: 'Helvetica', fontSize: '1rem', fontWeight: 'normal', lineHeight: 1.2 } } })).to.equal(false)
  })
})
