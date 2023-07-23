import { expect } from 'chai'
import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getTypographyName from './name.js'

describe('getTypographyName', () => {
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

  it('returns null string if no name exists', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(getTypographyName(token, 'helvetica')).to.equal('')
  })

  it('returns the name from a font family token if it exists', () => {
    expect(getTypographyName(helvetica, 'helvetica')).to.equal('Helvetica')
  })

  it('returns null string if the name requested does not exist', () => {
    expect(getTypographyName(helvetica, 'Arial')).to.equal('')
  })
})
