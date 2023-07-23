import { expect } from 'chai'
import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getTypographyKeys from './keys.js'

describe('getTypographyKeys', () => {
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

  it('returns an empty array if no colophon exists', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(getTypographyKeys(token)).to.eql([])
  })

  it('returns the array of entries in the colophon', () => {
    expect(getTypographyKeys(helvetica)).to.eql(['helvetica'])
  })
})
