import { expect } from 'chai'
import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getTypographyURL from './url.js'

describe('getTypographyURL', () => {
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

  it('returns null string if no URL exists', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(getTypographyURL(token, 'helvetica')).to.equal('')
  })

  it('returns the URL from a font family token if it exists', () => {
    expect(getTypographyURL(helvetica, 'helvetica')).to.equal('https://www.linotype.com/1308886/helvetica-family.html')
  })

  it('returns null string if the URL requested does not exist', () => {
    expect(getTypographyURL(helvetica, 'Arial')).to.equal('')
  })
})
