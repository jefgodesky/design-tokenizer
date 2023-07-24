import { expect } from 'chai'
import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import addBorderToDictionary from './dictionary.js'

describe('addBorderToDictionary', () => {
  const before = {}
  const token: DerefBorderToken = { $type: 'border', $value: { color: '#000000', width: '1px', style: 'solid' } }
  const custom: DerefBorderToken = { $type: 'border', $value: { color: '#000000', width: '1px', style: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } } }

  it('doesn\'t have a description if the token doesn\'t', () => {
    const actual = addBorderToDictionary('border.basic', token, before)
    expect(actual['border.basic.description']).to.equal(undefined)
  })

  it('adds the description to the dictionary', () => {
    const described = { ...token, $description: 'Basic Border' }
    const actual = addBorderToDictionary('border.basic', described, before)
    expect(actual['border.basic.description']).to.equal('Basic Border')
  })

  it('adds the hex color to the dictionary', () => {
    const actual = addBorderToDictionary('border.basic', token, before)
    expect(actual['border.basic.color.hex']).to.equal('#000000')
  })

  it('adds the RGBA color to the dictionary', () => {
    const actual = addBorderToDictionary('border.basic', token, before)
    expect(actual['border.basic.color.rgba']).to.equal('0, 0, 0, 1')
  })

  it('adds the CMYKA color to the dictionary', () => {
    const actual = addBorderToDictionary('border.basic', token, before)
    expect(actual['border.basic.color.cmyka']).to.equal('0, 0, 0, 100, 1')
  })

  it('adds the HSLA color to the dictionary', () => {
    const actual = addBorderToDictionary('border.basic', token, before)
    expect(actual['border.basic.color.hsla']).to.equal('0°, 0, 0, 1')
  })

  it('adds the HSVA color to the dictionary', () => {
    const actual = addBorderToDictionary('border.basic', token, before)
    expect(actual['border.basic.color.hsva']).to.equal('0°, 0, 0, 1')
  })

  it('adds the width to the dictionary', () => {
    const actual = addBorderToDictionary('border.basic', token, before)
    expect(actual['border.basic.width']).to.equal('1px')
  })

  it('adds the stroke style to the dictionary', () => {
    const actual = addBorderToDictionary('border.basic', token, before)
    expect(actual['border.basic.style']).to.equal('solid')
  })

  it('adds dashed to the dictionary for a custom stroke style', () => {
    const actual = addBorderToDictionary('border.custom', custom, before)
    expect(actual['border.custom.style']).to.equal('dashed')
  })

  it('doesn\'t add a dash array to the dictionary if the token doesn\'t have one', () => {
    const actual = addBorderToDictionary('border.basic', token, before)
    expect(actual['border.basic.style.dash-array']).to.equal(undefined)
  })

  it('adds the dash array to the dictionary', () => {
    const actual = addBorderToDictionary('border.custom', custom, before)
    expect(actual['border.custom.style.dash-array']).to.equal('0.5rem, 0.25rem')
  })

  it('doesn\'t add a line cap to the dictionary if the token doesn\'t have one', () => {
    const actual = addBorderToDictionary('border.basic', token, before)
    expect(actual['border.basic.style.line-cap']).to.equal(undefined)
  })

  it('adds the line cap to the dictionary', () => {
    const actual = addBorderToDictionary('border.custom', custom, before)
    expect(actual['border.custom.style.line-cap']).to.equal('round')
  })

  it('adds CSS to the dictionary', () => {
    const actual = addBorderToDictionary('border.basic', token, before)
    expect(actual['border.basic.css']).to.equal('1px solid #000000')
  })

  it('adds CSS as dashed to the dictionary if given custom style', () => {
    const actual = addBorderToDictionary('border.custom', custom, before)
    expect(actual['border.custom.css']).to.equal('1px dashed #000000')
  })

  it('doesn\'t add an SCSS variable unless there is one', () => {
    const actual = addBorderToDictionary('border.basic', token, before)
    expect(actual['border.basic.scss']).to.equal(undefined)
  })

  it('adds an SCSS variable if there is one', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_borders.scss', variable: 'basic' }
        }
      }
    }

    const actual = addBorderToDictionary('border.basic', sassy, before)
    expect(actual['border.basic.scss']).to.equal('$basic')
  })

  it('incorporates modules into SCSS variable', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_borders.scss', module: 'borders', variable: 'basic' }
        }
      }
    }

    const actual = addBorderToDictionary('border.basic', sassy, before)
    expect(actual['border.basic.scss']).to.equal('borders.$basic')
  })
})
