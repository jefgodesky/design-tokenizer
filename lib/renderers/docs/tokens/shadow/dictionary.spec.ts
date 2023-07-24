import { expect } from 'chai'
import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'
import addShadowToDictionary from './dictionary.js'

describe('addShadowToDictionary', () => {
  const before = {}
  const token: DerefShadowToken = { $type: 'shadow', $value: { color: '#00000080', offsetX: '0.5rem', offsetY: '0.5rem', blur: '1.5rem', spread: '0rem' } }

  it('doesn\'t have a description if the token doesn\'t', () => {
    const actual = addShadowToDictionary('shadow.basic', token, before)
    expect(actual['shadow.basic.description']).to.equal(undefined)
  })

  it('adds the description to the dictionary', () => {
    const described = { ...token, $description: 'Basic Shadow' }
    const actual = addShadowToDictionary('shadow.basic', described, before)
    expect(actual['shadow.basic.description']).to.equal('Basic Shadow')
  })

  it('adds the color hex to the dictionary', () => {
    const actual = addShadowToDictionary('shadow.basic', token, before)
    expect(actual['shadow.basic.color.hex']).to.equal('#00000080')
  })

  it('adds the color RGBA to the dictionary', () => {
    const actual = addShadowToDictionary('shadow.basic', token, before)
    expect(actual['shadow.basic.color.rgba']).to.equal('0, 0, 0, 0.5')
  })

  it('adds the color CMYKA to the dictionary', () => {
    const actual = addShadowToDictionary('shadow.basic', token, before)
    expect(actual['shadow.basic.color.cmyka']).to.equal('0, 0, 0, 100, 0.5')
  })

  it('adds the color HSLA to the dictionary', () => {
    const actual = addShadowToDictionary('shadow.basic', token, before)
    expect(actual['shadow.basic.color.hsla']).to.equal('0°, 0, 0, 0.5')
  })

  it('adds the color HSVA to the dictionary', () => {
    const actual = addShadowToDictionary('shadow.basic', token, before)
    expect(actual['shadow.basic.color.hsva']).to.equal('0°, 0, 0, 0.5')
  })

  it('adds the offset X to the dictionary', () => {
    const actual = addShadowToDictionary('shadow.basic', token, before)
    expect(actual['shadow.basic.offset.x']).to.equal('0.5rem')
  })

  it('adds the offset Y to the dictionary', () => {
    const actual = addShadowToDictionary('shadow.basic', token, before)
    expect(actual['shadow.basic.offset.y']).to.equal('0.5rem')
  })

  it('adds the blur to the dictionary', () => {
    const actual = addShadowToDictionary('shadow.basic', token, before)
    expect(actual['shadow.basic.blur']).to.equal('1.5rem')
  })

  it('adds the spread to the dictionary', () => {
    const actual = addShadowToDictionary('shadow.basic', token, before)
    expect(actual['shadow.basic.spread']).to.equal('0rem')
  })

  it('doesn\'t add an SCSS variable unless there is one', () => {
    const actual = addShadowToDictionary('shadow.basic', token, before)
    expect(actual['shadow.basic.scss']).to.equal(undefined)
  })

  it('adds an SCSS variable if there is one', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_shadows.scss', variable: 'basic' }
        }
      }
    }

    const actual = addShadowToDictionary('shadow.basic', sassy, before)
    expect(actual['shadow.basic.scss']).to.equal('$basic')
  })

  it('incorporates modules into SCSS variable', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_shadows.scss', module: 'shadows', variable: 'basic' }
        }
      }
    }

    const actual = addShadowToDictionary('shadow.basic', sassy, before)
    expect(actual['shadow.basic.scss']).to.equal('shadows.$basic')
  })
})
