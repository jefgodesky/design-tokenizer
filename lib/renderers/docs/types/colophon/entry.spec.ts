import { expect } from 'chai'
import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import getColophonEntry from './entry.js'

describe('getColophonEntry', () => {
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

  it('returns undefined for a token with no colophon', () => {
    expect(getColophonEntry({ $type, $value })).to.equal(undefined)
  })

  it('returns the first entry if no index is given', () => {
    expect(getColophonEntry(token)?.name).to.equal(helvetica.name)
  })

  it('returns the specified entry if given a numerical index', () => {
    expect(getColophonEntry(token, 1)?.name).to.equal(arial.name)
  })

  it('returns the specified entry if given a key', () => {
    expect(getColophonEntry(token, 'arial')?.name).to.equal(arial.name)
  })

  it('returns undefined if given an invalid index', () => {
    expect(getColophonEntry(token, 5)).to.equal(undefined)
  })

  it('returns undefined if given an invalid key', () => {
    expect(getColophonEntry(token, 'garamond')).to.equal(undefined)
  })
})
