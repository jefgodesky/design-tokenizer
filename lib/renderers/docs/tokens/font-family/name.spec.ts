import { expect } from 'chai'
import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import getFontFamilyName from './name.js'

describe('getFontFamilyName', () => {
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

  it('returns undefined if no name exists', () => {
    const token: DerefFontFamilyToken = { $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] }
    expect(getFontFamilyName(token, 'Helvetica')).to.equal(undefined)
  })

  it('returns the name from a font family token if it exists', () => {
    expect(getFontFamilyName(helvetica, 'helvetica')).to.equal('Helvetica')
  })

  it('returns undefined if the name requested does not exist', () => {
    expect(getFontFamilyName(helvetica, 'Arial')).to.equal(undefined)
  })
})
