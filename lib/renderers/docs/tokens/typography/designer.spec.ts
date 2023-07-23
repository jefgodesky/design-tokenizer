import { expect } from 'chai'
import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getTypographyDesigner from './designer.js'

describe('getTypographyDesigner', () => {
  const helvetica: DerefTypographyToken = {
    $type: 'typography',
    $value: {
      fontFamily: ['Helvetica', 'sans-serif'],
      fontSize: '1rem',
      fontWeight: 'normal',
      letterSpacing: '0rem',
      lineHeight: 1.2
    },
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

  it('returns null string if no designer exists', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: helvetica.$value }
    expect(getTypographyDesigner(token, 'helvetica')).to.equal('')
  })

  it('returns the designer from a font family token if it exists', () => {
    expect(getTypographyDesigner(helvetica, 'helvetica')).to.equal('Max Miedinger and Eduard Hoffmann')
  })

  it('returns null string if the designer requested does not exist', () => {
    expect(getTypographyDesigner(helvetica, 'Arial')).to.equal('')
  })
})
