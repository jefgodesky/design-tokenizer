import { expect } from 'chai'
import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import getColophonURL from './url.js'

describe('getColophonURL', () => {
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

  it('returns a null string for a token with no colophon', () => {
    expect(getColophonURL({ $type, $value })).to.equal('')
  })

  it('returns the URL of the first item if no index is given', () => {
    expect(getColophonURL(token)).to.equal(helvetica.url)
  })

  it('returns the URL of the specified item if given an index', () => {
    expect(getColophonURL(token, 1)).to.equal(arial.url)
  })

  it('returns the URL of the specified item if given a key', () => {
    expect(getColophonURL(token, 'arial')).to.equal(arial.url)
  })
})
