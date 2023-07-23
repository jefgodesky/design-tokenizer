import { expect } from 'chai'
import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import getFontFamilyKeys from './keys.js'

describe('getFontFamilyKeys', () => {
  const helvetica: DerefFontFamilyToken = {
    $type: 'fontFamily',
    $value: ['Helvetica', 'sans-serif'],
    $extensions: {
      'com.npmjs.package.design-tokenizer': {
        colophon: {
          helvetica: {
            name: 'Helvetica',
            designer: 'Max Miedinger and Eduard Hoffmann',
            url: 'https://www.linotype.com/1308886/helvetica-family.html'
          }
        }
      }
    }
  }

  it('returns an empty array if no colophon exists', () => {
    const token: DerefFontFamilyToken = { $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] }
    expect(getFontFamilyKeys(token)).to.eql([])
  })

  it('returns the array of entries in the colophon', () => {
    expect(getFontFamilyKeys(helvetica)).to.eql(['helvetica'])
  })
})
