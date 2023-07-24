import { expect } from 'chai'
import DerefStrokeStyleToken from '../../../../types/tokens/dereferenced/stroke-style.js'
import addStrokeStyleToDictionary from './dictionary.js'

describe('addStrokeStyleToDictionary', () => {
  const before = {}
  const str: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: 'solid' }
  const obj: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } }

  it('doesn\'t have a description if the token doesn\'t', () => {
    const actual = addStrokeStyleToDictionary('stroke style.solid', str, before)
    expect(actual['stroke style.solid.description']).to.equal(undefined)
  })

  it('adds the description to the dictionary', () => {
    const described = { ...str, $description: 'Solid Stroke' }
    const actual = addStrokeStyleToDictionary('stroke style.solid', described, before)
    expect(actual['stroke style.solid.description']).to.equal('Solid Stroke')
  })

  it('adds the stroke style string to the dictionary', () => {
    const actual = addStrokeStyleToDictionary('stroke style.solid', str, before)
    expect(actual['stroke style.solid']).to.equal('solid')
  })

  it('adds dashed to the dictionary for a custom stroke style', () => {
    const actual = addStrokeStyleToDictionary('stroke style.custom', obj, before)
    expect(actual['stroke style.custom']).to.equal('dashed')
  })

  it('doesn\'t add a dash array to the dictionary if the token doesn\'t have one', () => {
    const actual = addStrokeStyleToDictionary('stroke style.solid', str, before)
    expect(actual['stroke style.solid.dash-array']).to.equal(undefined)
  })

  it('adds the dash array to the dictionary', () => {
    const actual = addStrokeStyleToDictionary('stroke style.custom', obj, before)
    expect(actual['stroke style.custom.dash-array']).to.equal('0.5rem, 0.25rem')
  })

  it('doesn\'t add a line cap to the dictionary if the token doesn\'t have one', () => {
    const actual = addStrokeStyleToDictionary('stroke style.solid', str, before)
    expect(actual['stroke style.solid.line-cap']).to.equal(undefined)
  })

  it('adds the line cap to the dictionary', () => {
    const actual = addStrokeStyleToDictionary('stroke style.custom', obj, before)
    expect(actual['stroke style.custom.line-cap']).to.equal('round')
  })

  it('doesn\'t add an SCSS variable unless there is one', () => {
    const actual = addStrokeStyleToDictionary('stroke style.solid', str, before)
    expect(actual['stroke style.solid.scss']).to.equal(undefined)
  })

  it('adds an SCSS variable if there is one', () => {
    const sassy = {
      ...str,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_stroke.scss', variable: 'solid' }
        }
      }
    }

    const actual = addStrokeStyleToDictionary('stroke style.solid', sassy, before)
    expect(actual['stroke style.solid.scss']).to.equal('$solid')
  })

  it('incorporates modules into SCSS variable', () => {
    const sassy = {
      ...str,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_stroke.scss', module: 'stroke', variable: 'solid' }
        }
      }
    }

    const actual = addStrokeStyleToDictionary('stroke style.solid', sassy, before)
    expect(actual['stroke style.solid.scss']).to.equal('stroke.$solid')
  })
})
