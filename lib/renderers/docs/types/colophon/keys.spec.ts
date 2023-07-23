import { expect } from 'chai'
import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import getColophonKeys from './keys.js'

describe('getColophonKeys', () => {
  const $type = 'fontFamily'
  const $value = ['Helvetica', 'Arial', 'sans-serif']

  const helvetica = {
    name: 'Helvetica',
    designer: 'Max Miedinger and Eduard Hoffmann',
    url: 'https://www.linotype.com/1308886/helvetica-family.html'
  }

  const arial = {
    name: 'Arial',
    designer: 'Robin Nicholas and Patricia Saunders',
    url: 'https://www.fonts.com/font/monotype/arial'
  }

  const $extensions = {
    'com.npmjs.package.design-tokenizer': {
      colophon: { helvetica, arial }
    }
  }

  const token: DerefFontFamilyToken = { $type, $value, $extensions }

  it('returns an empty array for a token with no colophon', () => {
    expect(getColophonKeys({ $type, $value })).to.eql([])
  })

  it('returns an array with the colophon keys', () => {
    expect(getColophonKeys(token)).to.eql(['helvetica', 'arial'])
  })
})
