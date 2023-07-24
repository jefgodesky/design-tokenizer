import { expect } from 'chai'
import DerefFontWeightToken from '../../../../types/tokens/dereferenced/font-weight.js'
import addFontWeightToDictionary from './dictionary.js'

describe('addFontWeightToDictionary', () => {
  const before = {}
  const token: DerefFontWeightToken = { $type: 'fontWeight', $value: 'normal' }

  it('doesn\'t have a description if the token doesn\'t', () => {
    const actual = addFontWeightToDictionary('typography.weight.baseline', token, before)
    expect(actual['typography.weight.baseline.description']).to.equal(undefined)
  })

  it('adds the description to the dictionary', () => {
    const described = { ...token, $description: 'Baseline weight' }
    const actual = addFontWeightToDictionary('typography.weight.baseline', described, before)
    expect(actual['typography.weight.baseline.description']).to.equal('Baseline weight')
  })

  it('adds the font weight string to the dictionary', () => {
    const actual = addFontWeightToDictionary('typography.weight.baseline', token, before)
    expect(actual['typography.weight.baseline']).to.equal('normal')
  })

  it('adds the font weight number to the dictionary', () => {
    const token: DerefFontWeightToken = { $type: 'fontWeight', $value: 400 }
    const actual = addFontWeightToDictionary('typography.weight.baseline', token, before)
    expect(actual['typography.weight.baseline']).to.equal('400')
  })

  it('doesn\'t add an SCSS variable unless there is one', () => {
    const actual = addFontWeightToDictionary('typography.weight.baseline', token, before)
    expect(actual['typography.weight.baseline.scss']).to.equal(undefined)
  })

  it('adds an SCSS variable if there is one', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_typography.scss', variable: 'weight-base' }
        }
      }
    }

    const actual = addFontWeightToDictionary('typography.weight.baseline', sassy, before)
    expect(actual['typography.weight.baseline.scss']).to.equal('$weight-base')
  })

  it('incorporates modules into SCSS variable', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_typography.scss', module: 'typography', variable: 'weight-base' }
        }
      }
    }

    const actual = addFontWeightToDictionary('typography.weight.baseline', sassy, before)
    expect(actual['typography.weight.baseline.scss']).to.equal('typography.$weight-base')
  })
})
