import { expect } from 'chai'
import DerefTokenList from '../../types/deref-token-list.js'
import getDictionary from '../docs/dictionary.js'
import renderLoop from './loop.js'

describe('renderLoop', () => {
  const list: DerefTokenList = {
    'border.hairline': { $type: 'border', $value: { color: '#000000', width: '1px', style: 'solid' } },
    'color.black': { $type: 'color', $value: '#000000', $description: 'Black', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: 'modules/_colors.scss', module: 'colors', variable: 'black' } } } },
    'color.white': { $type: 'color', $value: '#ffffff', $description: 'White', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: 'modules/_colors.scss', module: 'colors', variable: 'white' } } } },
    'curves.flat': { $type: 'cubicBezier', $value: [0, 0, 0, 0] },
    'spacing.vertical': { $type: 'dimension', $value: '1rem', $description: 'Vertical space' },
    'strokes.custom': { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } },
    'shadow.standard': { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } },
    'transition.short': { $type: 'transition', $value: { duration: '200ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } },
    'type.body': { $type: 'typography', $value: { fontFamily: 'Helvetica', fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } },
    'type.italicized': { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontStyle: 'italic', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
  }

  const dict = getDictionary(list)

  it('can render token descriptions', () => {
    const actual = renderLoop(list, dict, 'color.*', '[{{ description }}]')
    expect(actual).to.equal('[Black][White]')
  })

  it('can render SCSS variables', () => {
    const actual = renderLoop(list, dict, 'color.*', '[{{ scss }}]')
    expect(actual).to.equal('[colors.$black][colors.$white]')
  })

  it('can render CSS values', () => {
    const actual = renderLoop(list, dict, 'border.*', '[{{ css }}]')
    expect(actual).to.equal('[1px solid #000000]')
  })

  it('can render hexadecimal color values', () => {
    const actual = renderLoop(list, dict, 'color.*', '[{{ hex }}]')
    expect(actual).to.equal('[#000000][#ffffff]')
  })

  it('can render RGBA color values', () => {
    const actual = renderLoop(list, dict, 'color.*', '[{{ rgba }}]')
    expect(actual).to.equal('[0, 0, 0, 1][255, 255, 255, 1]')
  })

  it('can render CMYK color values', () => {
    const actual = renderLoop(list, dict, 'color.*', '[{{ cmyka }}]')
    expect(actual).to.equal('[0, 0, 0, 100, 1][0, 0, 0, 0, 1]')
  })

  it('can render HSLA color values', () => {
    const actual = renderLoop(list, dict, 'color.*', '[{{ hsla }}]')
    expect(actual).to.equal('[0°, 0, 0, 1][0°, 0, 100, 1]')
  })

  it('can render HSVA color values', () => {
    const actual = renderLoop(list, dict, 'color.*', '[{{ hsva }}]')
    expect(actual).to.equal('[0°, 0, 0, 1][0°, 0, 100, 1]')
  })

  it('can render URLs for cubic Bézier tokens', () => {
    const actual = renderLoop(list, dict, 'curves.*', '[{{ url }}]')
    expect(actual).to.equal('[https://cubic-bezier.com/#0,0,0,0]')
  })

  it('can render a dash-array', () => {
    const actual = renderLoop(list, dict, 'strokes.*', '[{{ dash-array }}]')
    expect(actual).to.equal('[0.5rem, 0.25rem]')
  })

  it('can render a line-cap', () => {
    const actual = renderLoop(list, dict, 'strokes.*', '[{{ line-cap }}]')
    expect(actual).to.equal('[round]')
  })

  it('can render values for a border\'s color', () => {
    const actual = renderLoop(list, dict, 'border.*', '[{{ color.hex }} | {{ color.rgba }} | {{ color.cmyka }} | {{ color.hsla }} | {{ color.hsva }}]')
    expect(actual).to.equal('[#000000 | 0, 0, 0, 1 | 0, 0, 0, 100, 1 | 0°, 0, 0, 1 | 0°, 0, 0, 1]')
  })

  it('can render a border\'s width', () => {
    const actual = renderLoop(list, dict, 'border.*', '[{{ width }}]')
    expect(actual).to.equal('[1px]')
  })

  it('can render a shadow\'s X and Y offset', () => {
    const actual = renderLoop(list, dict, 'shadow.*', '[{{ offset.x }}, {{ offset.y }}]')
    expect(actual).to.equal('[0.5rem, 0.5rem]')
  })

  it('can render a shadow\'s blur radius', () => {
    const actual = renderLoop(list, dict, 'shadow.*', '[{{ blur }}]')
    expect(actual).to.equal('[1.5rem]')
  })

  it('can render a shadow\'s spread', () => {
    const actual = renderLoop(list, dict, 'shadow.*', '[{{ spread }}]')
    expect(actual).to.equal('[0rem]')
  })

  it('can render a transition\'s duration', () => {
    const actual = renderLoop(list, dict, 'transition.*', '[{{ duration }}]')
    expect(actual).to.equal('[200ms]')
  })

  it('can render a transition\'s delay', () => {
    const actual = renderLoop(list, dict, 'transition.*', '[{{ delay }}]')
    expect(actual).to.equal('[0ms]')
  })

  it('can render a transition\'s timing function', () => {
    const actual = renderLoop(list, dict, 'transition.*', '[{{ timing }}]')
    expect(actual).to.equal('[0, 0, 0, 0]')
  })

  it('can render a URL for the transition\'s timing function', () => {
    const actual = renderLoop(list, dict, 'transition.*', '[{{ timing.url }}]')
    expect(actual).to.equal('[https://cubic-bezier.com/#0,0,0,0]')
  })

  it('can render the font family', () => {
    const actual = renderLoop(list, dict, 'type.*', '[{{ family }}]')
    expect(actual).to.equal('[Helvetica][Helvetica, sans-serif]')
  })

  it('can render the font size', () => {
    const actual = renderLoop(list, dict, 'type.*', '[{{ size }}]')
    expect(actual).to.equal('[1rem][1rem]')
  })

  it('can render the font weight', () => {
    const actual = renderLoop(list, dict, 'type.*', '[{{ weight }}]')
    expect(actual).to.equal('[normal][normal]')
  })

  it('can render the letter spacing', () => {
    const actual = renderLoop(list, dict, 'type.*', '[{{ spacing.letter }}]')
    expect(actual).to.equal('[0rem][0rem]')
  })

  it('can render the line spacing', () => {
    const actual = renderLoop(list, dict, 'type.*', '[{{ spacing.line }}]')
    expect(actual).to.equal('[1.2][1.2]')
  })

  it('can render the line spacing with units', () => {
    const actual = renderLoop(list, dict, 'type.*', '[{{ spacing.line.abs }}]')
    expect(actual).to.equal('[1.20rem][1.20rem]')
  })

  it('can render the style', () => {
    const actual = renderLoop(list, dict, 'type.*', '[{{ style }}]')
    expect(actual).to.equal('[][italic]')
  })
})
