import { expect } from 'chai'
import DerefCubicBezierToken from '../../../../types/tokens/dereferenced/cubic-bezier.js'
import addCubicBezierToDictionary from './dictionary.js'

describe('addCubicBezierToDictionary', () => {
  const before = {}
  const token: DerefCubicBezierToken = { $type: 'cubicBezier', $value: [0, 0, 0, 0] }

  it('doesn\'t have a description if the token doesn\'t', () => {
    const actual = addCubicBezierToDictionary('curve.flat', token, before)
    expect(actual['curve.flat.description']).to.equal(undefined)
  })

  it('adds the description to the dictionary', () => {
    const described = { ...token, $description: 'One second' }
    const actual = addCubicBezierToDictionary('curve.flat', described, before)
    expect(actual['curve.flat.description']).to.equal('One second')
  })

  it('adds the cubic bézier to the dictionary', () => {
    const actual = addCubicBezierToDictionary('curve.flat', token, before)
    expect(actual['curve.flat']).to.equal('0, 0, 0, 0')
  })

  it('adds a URL to cubic-bezier.com to the dictionary', () => {
    const actual = addCubicBezierToDictionary('curve.flat', token, before)
    expect(actual['curve.flat.url']).to.equal('https://cubic-bezier.com/#0,0,0,0')
  })

  it('adds CSS to the dictionary', () => {
    const actual = addCubicBezierToDictionary('curve.flat', token, before)
    expect(actual['curve.flat.css']).to.equal('cubic-bezier(0, 0, 0, 0)')
  })

  it('doesn\'t add an SCSS variable unless there is one', () => {
    const actual = addCubicBezierToDictionary('curve.flat', token, before)
    expect(actual['curve.flat.scss']).to.equal(undefined)
  })

  it('adds an SCSS variable if there is one', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_curves.scss', variable: 'flat' }
        }
      }
    }

    const actual = addCubicBezierToDictionary('curve.flat', sassy, before)
    expect(actual['curve.flat.scss']).to.equal('$flat')
  })

  it('incorporates modules into SCSS variable', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_curves.scss', module: 'curves', variable: 'flat' }
        }
      }
    }

    const actual = addCubicBezierToDictionary('curve.flat', sassy, before)
    expect(actual['curve.flat.scss']).to.equal('curves.$flat')
  })
})
