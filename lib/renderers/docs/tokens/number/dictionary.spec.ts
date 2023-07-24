import { expect } from 'chai'
import DerefNumberToken from '../../../../types/tokens/dereferenced/number.js'
import addNumberToDictionary from './dictionary.js'

describe('addNumberToDictionary', () => {
  const before = {}
  const token: DerefNumberToken = { $type: 'number', $value: 1 }

  it('doesn\'t have a description if the token doesn\'t', () => {
    const actual = addNumberToDictionary('number.loneliest', token, before)
    expect(actual['number.loneliest.description']).to.equal(undefined)
  })

  it('adds the description to the dictionary', () => {
    const described = { ...token, $description: 'Numero Uno' }
    const actual = addNumberToDictionary('number.loneliest', described, before)
    expect(actual['number.loneliest.description']).to.equal('Numero Uno')
  })

  it('adds the number to the dictionary', () => {
    const actual = addNumberToDictionary('number.loneliest', token, before)
    expect(actual['number.loneliest']).to.equal('1')
  })

  it('doesn\'t add an SCSS variable unless there is one', () => {
    const actual = addNumberToDictionary('number.loneliest', token, before)
    expect(actual['number.loneliest.scss']).to.equal(undefined)
  })

  it('adds an SCSS variable if there is one', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_numbers.scss', variable: 'one' }
        }
      }
    }

    const actual = addNumberToDictionary('number.loneliest', sassy, before)
    expect(actual['number.loneliest.scss']).to.equal('$one')
  })

  it('incorporates modules into SCSS variable', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_numbers.scss', module: 'numbers', variable: 'one' }
        }
      }
    }

    const actual = addNumberToDictionary('number.loneliest', sassy, before)
    expect(actual['number.loneliest.scss']).to.equal('numbers.$one')
  })
})
