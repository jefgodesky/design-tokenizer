import { expect } from 'chai'
import DerefDimensionToken from '../../../../types/tokens/dereferenced/dimension.js'
import addDimensionTokenToDictionary from './dictionary.js'

describe('addDimensionTokenToDictionary', () => {
  const before = {}
  const token: DerefDimensionToken = { $type: 'dimension', $value: '1rem' }

  it('doesn\'t have a description if the token doesn\'t', () => {
    const actual = addDimensionTokenToDictionary('spacing.vertical', token, before)
    expect(actual['spacing.vertical.description']).to.equal(undefined)
  })

  it('adds the description to the dictionary', () => {
    const described = { ...token, $description: 'Standard vertical space' }
    const actual = addDimensionTokenToDictionary('spacing.vertical', described, before)
    expect(actual['spacing.vertical.description']).to.equal('Standard vertical space')
  })

  it('adds the dimension value to the dictionary', () => {
    const actual = addDimensionTokenToDictionary('spacing.vertical', token, before)
    expect(actual['spacing.vertical']).to.equal('1rem')
  })

  it('doesn\'t add an SCSS variable unless there is one', () => {
    const actual = addDimensionTokenToDictionary('spacing.vertical', token, before)
    expect(actual['spacing.vertical.scss']).to.equal(undefined)
  })

  it('adds an SCSS variable if there is one', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_spacing.scss', variable: 'vertical' }
        }
      }
    }

    const actual = addDimensionTokenToDictionary('spacing.vertical', sassy, before)
    expect(actual['spacing.vertical.scss']).to.equal('$vertical')
  })

  it('incorporates modules into SCSS variable', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_spacing.scss', module: 'spacing', variable: 'vertical' }
        }
      }
    }

    const actual = addDimensionTokenToDictionary('spacing.vertical', sassy, before)
    expect(actual['spacing.vertical.scss']).to.equal('spacing.$vertical')
  })
})
