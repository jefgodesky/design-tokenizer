import { expect } from 'chai'
import DerefTokenList from '../../types/deref-token-list.js'
import generateVariables from './generate-variables.js'

describe('generateVariables', () => {
  it('renders color tokens', () => {
    const list: DerefTokenList = { 'color.primary.green': { $type: 'color', $value: '#008800' } }
    expect(generateVariables(list)).to.equal('$color-primary-green: #008800;')
  })

  it('renders dimension tokens', () => {
    const list: DerefTokenList = { 'breakpoint.primary': { $type: 'dimension', $value: '40rem' } }
    expect(generateVariables(list)).to.equal('$breakpoint-primary: 40rem;')
  })

  it('renders a specified subset of a list', () => {
    const list: DerefTokenList = {
      'color.primary.green': { $type: 'color', $value: '#008800' },
      'breakpoint.primary': { $type: 'dimension', $value: '40rem' }
    }
    expect(generateVariables(list, { prefix: 'color.primary' })).to.equal('$color-primary-green: #008800;')
  })

  it('can render everything in the list', () => {
    const list: DerefTokenList = {
      'color.primary.green': { $type: 'color', $value: '#008800' },
      'breakpoint.primary': { $type: 'dimension', $value: '40rem' }
    }
    expect(generateVariables(list)).to.equal('$color-primary-green: #008800;\n$breakpoint-primary: 40rem;')
  })

  it('renders tokens with prefixes added', () => {
    const list: DerefTokenList = { 'color.primary.green': { $type: 'color', $value: '#008800' } }
    expect(generateVariables(list, { add: 'test.case' })).to.equal('$test-case-color-primary-green: #008800;')
  })

  it('renders tokens with prefixes removed', () => {
    const list: DerefTokenList = { 'color.primary.green': { $type: 'color', $value: '#008800' } }
    expect(generateVariables(list, { remove: 'color.primary' })).to.equal('$green: #008800;')
  })

  it('renders tokens with one prefix added and another removed', () => {
    const list: DerefTokenList = { 'color.primary.green': { $type: 'color', $value: '#008800' } }
    expect(generateVariables(list, { add: 'test.case', remove: 'color.primary' })).to.equal('$test-case-green: #008800;')
  })

  it('renders font family tokens', () => {
    const list: DerefTokenList = { 'typography.family.sans': { $type: 'fontFamily', $value: ['Helvetica', 'Arial', 'sans-serif'] } }
    expect(generateVariables(list)).to.equal('$typography-family-sans: "Helvetica", "Arial", sans-serif;')
  })

  it('renders font weight tokens', () => {
    const list: DerefTokenList = { 'typography.weight.baseline': { $type: 'fontWeight', $value: 'normal' } }
    expect(generateVariables(list)).to.equal('$typography-weight-baseline: normal;')
  })

  it('renders duration tokens', () => {
    const list: DerefTokenList = { 'duration.quick': { $type: 'duration', $value: '200ms' } }
    expect(generateVariables(list)).to.equal('$duration-quick: 200ms;')
  })

  it('renders cubic bézier tokens', () => {
    const list: DerefTokenList = { 'curve.flat': { $type: 'cubicBezier', $value: [0, 0, 0, 0] } }
    expect(generateVariables(list)).to.equal('$curve-flat: cubic-bezier(0, 0, 0, 0);')
  })

  it('renders number tokens', () => {
    const list: DerefTokenList = { 'number.magic.nil': { $type: 'number', $value: 0 } }
    expect(generateVariables(list)).to.equal('$number-magic-nil: 0;')
  })

  it('renders stroke style string tokens', () => {
    const list: DerefTokenList = { 'stroke.style.solid': { $type: 'strokeStyle', $value: 'solid' } }
    expect(generateVariables(list)).to.equal('$stroke-style-solid: solid;')
  })

  it('renders stroke style object tokens', () => {
    const list: DerefTokenList = { 'stroke.style.custom': { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } } }
    expect(generateVariables(list)).to.equal('$stroke-style-custom-dash-array: 0.5rem 0.25rem;\n$stroke-style-custom-line-cap: round;')
  })

  it('renders border tokens', () => {
    const list: DerefTokenList = { 'border.basic': { $type: 'border', $value: { color: '#008800', width: '1px', style: 'solid' } } }
    expect(generateVariables(list)).to.equal('$border-basic: 1px solid #008800;')
  })

  it('renders border tokens with custom stroke styles', () => {
    const list: DerefTokenList = { 'border.custom': { $type: 'border', $value: { color: '#008800', width: '1px', style: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } } } }
    expect(generateVariables(list)).to.equal('$border-custom: 1px dashed #008800;\n$border-custom-dash-array: 0.5rem 0.25rem;\n$border-custom-line-cap: round;')
  })

  it('renders transition tokens', () => {
    const list: DerefTokenList = { 'transition.standard': { $type: 'transition', $value: { duration: '200ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } } }
    expect(generateVariables(list)).to.equal('$transition-standard: 200ms cubic-bezier(0, 0, 0, 0) 0ms;')
  })

  it('renders shadow tokens', () => {
    const list: DerefTokenList = { 'shadow.standard': { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } } }
    expect(generateVariables(list)).to.equal('$shadow-standard: 0.5rem 0.5rem 1.5rem 0rem #00000080;')
  })

  it('renders gradient tokens', () => {
    const list: DerefTokenList = { 'gradient.monochrome': { $type: 'gradient', $value: [{ color: '#000000', position: 0 }, { color: '#ffffff', position: 1 }] } }
    expect(generateVariables(list)).to.equal('$gradient-monochrome: #000000 0%, #ffffff 100%;')
  })

  it('renders typography tokens', () => {
    const list: DerefTokenList = { 'typography.body': { $type: 'typography', $value: { fontFamily: ['Helvetica', 'Arial', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } } }
    expect(generateVariables(list)).to.equal('$typography-body: normal 1rem/1.2rem "Helvetica", "Arial", sans-serif;\n$typography-body-letter-spacing: 0rem;')
  })

  it('renders typography tokens with font style', () => {
    const list: DerefTokenList = { 'typography.emphasized': { $type: 'typography', $value: { fontFamily: ['Helvetica', 'Arial', 'sans-serif'], fontSize: '1rem', fontStyle: 'italic', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } } }
    expect(generateVariables(list)).to.equal('$typography-emphasized: italic normal 1rem/1.2rem "Helvetica", "Arial", sans-serif;\n$typography-emphasized-letter-spacing: 0rem;')
  })

  it('can render all of them from the same list', () => {
    const list: DerefTokenList = {
      'color.primary.green': { $type: 'color', $value: '#008800' },
      'breakpoint.primary': { $type: 'dimension', $value: '40rem' },
      'typography.family.sans': { $type: 'fontFamily', $value: ['Helvetica', 'Arial', 'sans-serif'] },
      'typography.weight.baseline': { $type: 'fontWeight', $value: 'normal' },
      'duration.quick': { $type: 'duration', $value: '200ms' },
      'curve.flat': { $type: 'cubicBezier', $value: [0, 0, 0, 0] },
      'number.magic.nil': { $type: 'number', $value: 0 },
      'stroke.style.solid': { $type: 'strokeStyle', $value: 'solid' },
      'stroke.style.custom': { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } },
      'border.basic': { $type: 'border', $value: { color: '#008800', width: '1px', style: 'solid' } },
      'border.custom': { $type: 'border', $value: { color: '#008800', width: '1px', style: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } } },
      'transition.standard': { $type: 'transition', $value: { duration: '200ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } },
      'shadow.standard': { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } },
      'gradient.monochrome': { $type: 'gradient', $value: [{ color: '#000000', position: 0 }, { color: '#ffffff', position: 1 }] },
      'typography.body': { $type: 'typography', $value: { fontFamily: ['Helvetica', 'Arial', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } },
      'typography.emphasized': { $type: 'typography', $value: { fontFamily: ['Helvetica', 'Arial', 'sans-serif'], fontSize: '1rem', fontStyle: 'italic', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
    }
    const expected = [
      '$color-primary-green: #008800;',
      '$breakpoint-primary: 40rem;',
      '$typography-family-sans: "Helvetica", "Arial", sans-serif;',
      '$typography-weight-baseline: normal;',
      '$duration-quick: 200ms;',
      '$curve-flat: cubic-bezier(0, 0, 0, 0);',
      '$number-magic-nil: 0;',
      '$stroke-style-solid: solid;',
      '$stroke-style-custom-dash-array: 0.5rem 0.25rem;',
      '$stroke-style-custom-line-cap: round;',
      '$border-basic: 1px solid #008800;',
      '$border-custom: 1px dashed #008800;',
      '$border-custom-dash-array: 0.5rem 0.25rem;',
      '$border-custom-line-cap: round;',
      '$transition-standard: 200ms cubic-bezier(0, 0, 0, 0) 0ms;',
      '$shadow-standard: 0.5rem 0.5rem 1.5rem 0rem #00000080;',
      '$gradient-monochrome: #000000 0%, #ffffff 100%;',
      '$typography-body: normal 1rem/1.2rem "Helvetica", "Arial", sans-serif;',
      '$typography-body-letter-spacing: 0rem;',
      '$typography-emphasized: italic normal 1rem/1.2rem "Helvetica", "Arial", sans-serif;',
      '$typography-emphasized-letter-spacing: 0rem;'
    ].join('\n')
    expect(generateVariables(list)).to.equal(expected)
  })
})
