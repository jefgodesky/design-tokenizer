import { expect } from 'chai'
import Token from '../types/token.js'
import getExtension from './extension.js'

describe('getExtension', () => {
  it('returns undefined if the token has no extension', () => {
    const token: Token = { $type: 'color', $value: '#008800' }
    expect(getExtension(token)).to.equal(undefined)
  })

  it('returns the extension if the token has one', () => {
    const token: Token = {
      $type: 'color',
      $value: '#008800',
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_colors.scss', variable: '$green' }
        }
      }
    }

    const ext = getExtension(token)
    expect(ext?.scss?.file).to.equal('_colors.scss')
    expect(ext?.scss?.variable).to.equal('$green')
  })
})
