import { expect } from 'chai'
import DerefColorToken from '../../types/tokens/dereferenced/color.js'
import getSCSSVariable from './scss.js'

describe('getSCSSVariable', () => {
  it('returns a null string if the token has no extension', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#008800' }
    expect(getSCSSVariable(token)).to.equal('')
  })

  it('returns a null string if the token has no SCSS extension', () => {
    const token: DerefColorToken = {
      $type: 'color',
      $value: '#008800',
      $extensions: {
        'com.npmjs.package.design-tokenizer': {}
      }
    }
    expect(getSCSSVariable(token)).to.equal('')
  })

  it('returns the SCSS variable', () => {
    const token: DerefColorToken = {
      $type: 'color',
      $value: '#008800',
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: {
            file: 'modules/_colors.scss',
            variable: 'green'
          }
        }
      }
    }
    expect(getSCSSVariable(token)).to.equal('$green')
  })

  it('includes module if it exists', () => {
    const token: DerefColorToken = {
      $type: 'color',
      $value: '#008800',
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: {
            file: 'modules/_colors.scss',
            module: 'colors',
            variable: 'green'
          }
        }
      }
    }
    expect(getSCSSVariable(token)).to.equal('colors.$green')
  })
})
