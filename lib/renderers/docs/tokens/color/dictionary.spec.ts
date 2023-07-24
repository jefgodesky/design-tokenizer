import { expect } from 'chai'
import DerefColorToken from '../../../../types/tokens/dereferenced/color.js'
import addColorTokenToDictionary from './dictionary.js'

describe('addColorTokenToDictionary', () => {
  const before = {}
  const token: DerefColorToken = { $type: 'color', $value: '#008800' }

  it('doesn\'t have a description if the token doesn\'t', () => {
    const actual = addColorTokenToDictionary('color.green', token, before)
    expect(actual['color.green.description']).to.equal(undefined)
  })

  it('adds the description to the dictionary', () => {
    const described = { ...token, $description: 'Green' }
    const actual = addColorTokenToDictionary('color.green', described, before)
    expect(actual['color.green.description']).to.equal('Green')
  })

  it('adds the hex value to the dictionary', () => {
    const actual = addColorTokenToDictionary('color.green', token, before)
    expect(actual['color.green.hex']).to.equal('#008800')
  })

  it('adds the RGBA value to the dictionary', () => {
    const actual = addColorTokenToDictionary('color.green', token, before)
    expect(actual['color.green.rgba']).to.equal('0, 136, 0, 1')
  })

  it('adds the CMYKA value to the dictionary', () => {
    const actual = addColorTokenToDictionary('color.green', token, before)
    expect(actual['color.green.cmyka']).to.equal('100, 0, 100, 47, 1')
  })

  it('adds the HSLA value to the dictionary', () => {
    const actual = addColorTokenToDictionary('color.green', token, before)
    expect(actual['color.green.hsla']).to.equal('120°, 100, 27, 1')
  })

  it('adds the HSVA value to the dictionary', () => {
    const actual = addColorTokenToDictionary('color.green', token, before)
    expect(actual['color.green.hsva']).to.equal('120°, 100, 53, 1')
  })

  it('doesn\'t add an SCSS variable unless there is one', () => {
    const actual = addColorTokenToDictionary('color.green', token, before)
    expect(actual['color.green.scss']).to.equal(undefined)
  })

  it('adds an SCSS variable if there is one', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_colors.scss', variable: 'green' }
        }
      }
    }

    const actual = addColorTokenToDictionary('color.green', sassy, before)
    expect(actual['color.green.scss']).to.equal('$green')
  })

  it('incorporates modules into SCSS variable', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_colors.scss', module: 'colors', variable: 'green' }
        }
      }
    }

    const actual = addColorTokenToDictionary('color.green', sassy, before)
    expect(actual['color.green.scss']).to.equal('colors.$green')
  })
})
