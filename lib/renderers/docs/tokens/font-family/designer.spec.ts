import { expect } from 'chai'
import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import getFontFamilyDesigner from './designer.js'

describe('getFontFamilyDesigner', () => {
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

  it('returns undefined if no designer exists', () => {
    const token: DerefFontFamilyToken = { $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] }
    expect(getFontFamilyDesigner(token, 'Helvetica')).to.equal(undefined)
  })

  it('returns the designer from a font family token if it exists', () => {
    expect(getFontFamilyDesigner(helvetica, 'helvetica')).to.equal('Max Miedinger and Eduard Hoffmann')
  })

  it('returns undefined if the designer requested does not exist', () => {
    expect(getFontFamilyDesigner(helvetica, 'Arial')).to.equal(undefined)
  })
})
