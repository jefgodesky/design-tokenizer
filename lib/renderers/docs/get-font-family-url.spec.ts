import { expect } from 'chai'
import DerefFontFamilyToken from '../../types/tokens/dereferenced/font-family.js'
import getFontFamilyURL from './get-font-family-url.js'

describe('getFontFamilyURL', () => {
  const helvetica: DerefFontFamilyToken = {
    $type: 'fontFamily',
    $value: ['Helvetica', 'sans-serif'],
    $extensions: {
      'com.github.jefgodesky.design-tokenizer': {
        helvetica: {
          name: 'Helvetica',
          designer: 'Max Miedinger and Eduard Hoffmann',
          url: 'https://www.linotype.com/1308886/helvetica-family.html'
        }
      }
    }
  }

  it('returns undefined if no URL exists', () => {
    const token: DerefFontFamilyToken = { $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] }
    expect(getFontFamilyURL(token, 'Helvetica')).to.equal(undefined)
  })

  it('returns the URL from a font family token if it exists', () => {
    expect(getFontFamilyURL(helvetica, 'helvetica')).to.equal('https://www.linotype.com/1308886/helvetica-family.html')
  })

  it('returns undefined if the URL requested does not exist', () => {
    expect(getFontFamilyURL(helvetica, 'Arial')).to.equal(undefined)
  })
})
