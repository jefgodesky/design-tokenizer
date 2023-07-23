import { expect } from 'chai'
import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import getColophonDesigner from './designer.js'

describe('getColophonDesigner', () => {
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
    expect(getColophonDesigner({ $type, $value })).to.equal('')
  })

  it('returns the designer of the first item if no index is given', () => {
    expect(getColophonDesigner(token)).to.equal(helvetica.designer)
  })

  it('returns the designer of the specified item if given an index', () => {
    expect(getColophonDesigner(token, 1)).to.equal(arial.designer)
  })

  it('returns the designer of the specified item if given a key', () => {
    expect(getColophonDesigner(token, 'arial')).to.equal(arial.designer)
  })
})
