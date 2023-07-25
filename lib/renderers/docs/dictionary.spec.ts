import { expect } from 'chai'
import DerefTokenList from '../../types/deref-token-list.js'
import getDictionary from './dictionary.js'

describe('getDictionary', () => {
  it('adds color tokens to the dictionary', () => {
    const list: DerefTokenList = { 'color.green': { $type: 'color', $value: '#008800' } }
    expect(getDictionary(list)['color.green.hex']).to.equal('#008800')
  })

  it('adds dimensions tokens to the dictionary', () => {
    const list: DerefTokenList = { 'spacing.vertical': { $type: 'dimension', $value: '1rem' } }
    expect(getDictionary(list)['spacing.vertical']).to.equal('1rem')
  })

  it('adds font family tokens to the dictionary', () => {
    const list: DerefTokenList = { 'family.sans': { $type: 'fontFamily', $value: ['Helvetica', 'Arial', 'sans-serif'] } }
    expect(getDictionary(list)['family.sans']).to.equal('Helvetica, Arial, sans-serif')
  })

  it('adds font weight tokens to the dictionary', () => {
    const list: DerefTokenList = { 'typography.weight.baseline': { $type: 'fontWeight', $value: 400 } }
    expect(getDictionary(list)['typography.weight.baseline']).to.equal('400')
  })

  it('adds duration tokens to the dictionary', () => {
    const list: DerefTokenList = { 'duration.instantaneous': { $type: 'duration', $value: '0ms' } }
    expect(getDictionary(list)['duration.instantaneous']).to.equal('0ms')
  })

  it('adds cubic bézier tokens to the dictionary', () => {
    const list: DerefTokenList = { 'curve.flat': { $type: 'cubicBezier', $value: [0, 0, 0, 0] } }
    expect(getDictionary(list)['curve.flat']).to.equal('0, 0, 0, 0')
  })

  it('adds number tokens to the dictionary', () => {
    const list: DerefTokenList = { 'number.loneliest': { $type: 'number', $value: 1 } }
    expect(getDictionary(list)['number.loneliest']).to.equal('1')
  })

  it('adds stroke style tokens to the dictionary', () => {
    const list: DerefTokenList = { 'stroke.solid': { $type: 'strokeStyle', $value: 'solid' } }
    expect(getDictionary(list)['stroke.solid']).to.equal('solid')
  })

  it('adds border tokens to the dictionary', () => {
    const list: DerefTokenList = { 'border.basic': { $type: 'border', $value: { color: '#000000', width: '1px', style: 'solid' } } }
    expect(getDictionary(list)['border.basic.color.rgba']).to.equal('0, 0, 0, 1')
  })

  it('adds transition tokens to the dictionary', () => {
    const list: DerefTokenList = { 'transition.quick': { $type: 'transition', $value: { duration: '200ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } } }
    expect(getDictionary(list)['transition.quick.timing.url']).to.equal('https://cubic-bezier.com/#0,0,0,0')
  })

  it('adds shadow tokens to the dictionary', () => {
    const list: DerefTokenList = { 'shadow.basic': { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } } }
    expect(getDictionary(list)['shadow.basic.offset.x']).to.equal('0.5rem')
  })

  it('adds gradient tokens to the dictionary', () => {
    const list: DerefTokenList = { 'gradient.monochrome': { $type: 'gradient', $value: [{ color: '#000000', position: 0 }, { color: '#ffffff', position: 1 }] } }
    expect(getDictionary(list)['gradient.monochrome.css']).to.equal('#000000 0%, #ffffff 100%')
  })

  it('adds typography tokens to the dictionary', () => {
    const list: DerefTokenList = { 'typography.body': { $type: 'typography', $value: { fontFamily: ['Helvetica', 'Arial', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } } }
    expect(getDictionary(list)['typography.body.css']).to.equal('normal 1rem/1.20rem "Helvetica", "Arial", sans-serif')
  })
})
