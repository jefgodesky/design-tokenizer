import { expect } from 'chai'
import DerefGradientToken from '../../../../types/tokens/dereferenced/gradient.js'
import addGradientToDictionary from './dictionary.js'

describe('addGradientToDictionary', () => {
  const before = {}
  const token: DerefGradientToken = {
    $type: 'gradient',
    $value: [
      { color: '#000000', position: 0 },
      { color: '#ffffff', position: 1 }
    ]
  }

  it('doesn\'t have a description if the token doesn\'t', () => {
    const actual = addGradientToDictionary('gradient.monochrome', token, before)
    expect(actual['gradient.monochrome.description']).to.equal(undefined)
  })

  it('adds the description to the dictionary', () => {
    const described = { ...token, $description: 'Black to white' }
    const actual = addGradientToDictionary('gradient.monochrome', described, before)
    expect(actual['gradient.monochrome.description']).to.equal('Black to white')
  })

  it('adds the hex color for each stop to the dictionary', () => {
    const actual = addGradientToDictionary('gradient.monochrome', token, before)
    console.log(actual)
    expect(actual['gradient.monochrome.0.color.hex']).to.equal('#000000')
    expect(actual['gradient.monochrome.1.color.hex']).to.equal('#ffffff')
  })

  it('adds the RGBA color for each stop to the dictionary', () => {
    const actual = addGradientToDictionary('gradient.monochrome', token, before)
    expect(actual['gradient.monochrome.0.color.rgba']).to.equal('0, 0, 0, 1')
    expect(actual['gradient.monochrome.1.color.rgba']).to.equal('255, 255, 255, 1')
  })

  it('adds the CMYKA color for each stop to the dictionary', () => {
    const actual = addGradientToDictionary('gradient.monochrome', token, before)
    expect(actual['gradient.monochrome.0.color.cmyka']).to.equal('0, 0, 0, 100, 1')
    expect(actual['gradient.monochrome.1.color.cmyka']).to.equal('0, 0, 0, 0, 1')
  })

  it('adds the HSLA color for each stop to the dictionary', () => {
    const actual = addGradientToDictionary('gradient.monochrome', token, before)
    expect(actual['gradient.monochrome.0.color.hsla']).to.equal('0°, 0, 0, 1')
    expect(actual['gradient.monochrome.1.color.hsla']).to.equal('0°, 0, 100, 1')
  })

  it('adds the HSVA color for each stop to the dictionary', () => {
    const actual = addGradientToDictionary('gradient.monochrome', token, before)
    expect(actual['gradient.monochrome.0.color.hsva']).to.equal('0°, 0, 0, 1')
    expect(actual['gradient.monochrome.1.color.hsva']).to.equal('0°, 0, 100, 1')
  })

  it('adds the position for each stop to the dictionary', () => {
    const actual = addGradientToDictionary('gradient.monochrome', token, before)
    expect(actual['gradient.monochrome.0.position']).to.equal('0')
    expect(actual['gradient.monochrome.1.position']).to.equal('1')
  })

  it('adds the position for each stop as a percent to the dictionary', () => {
    const actual = addGradientToDictionary('gradient.monochrome', token, before)
    expect(actual['gradient.monochrome.0.position.percent']).to.equal('0%')
    expect(actual['gradient.monochrome.1.position.percent']).to.equal('100%')
  })

  it('adds the CSS to the dictionary', () => {
    const actual = addGradientToDictionary('gradient.monochrome', token, before)
    expect(actual['gradient.monochrome.css']).to.equal('#000000 0%, #ffffff 100%')
  })

  it('doesn\'t add an SCSS variable unless there is one', () => {
    const actual = addGradientToDictionary('gradient.monochrome', token, before)
    expect(actual['gradient.monochrome.scss']).to.equal(undefined)
  })

  it('adds an SCSS variable if there is one', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_gradients.scss', variable: 'monochrome' }
        }
      }
    }

    const actual = addGradientToDictionary('gradient.monochrome', sassy, before)
    expect(actual['gradient.monochrome.scss']).to.equal('$monochrome')
  })

  it('incorporates modules into SCSS variable', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_gradients.scss', module: 'gradients', variable: 'monochrome' }
        }
      }
    }

    const actual = addGradientToDictionary('gradient.monochrome', sassy, before)
    expect(actual['gradient.monochrome.scss']).to.equal('gradients.$monochrome')
  })
})
