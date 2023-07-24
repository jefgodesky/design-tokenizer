import { expect } from 'chai'
import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import addFontFamilyokenToDictionary from './dictionary.js'

describe('addFontFamilyokenToDictionary', () => {
  const before = {}
  const token: DerefFontFamilyToken = { $type: 'fontFamily', $value: ['Helvetica', 'Arial', 'sans-serif'] }

  const withColophon = {
    ...token,
    $extensions: {
      'com.npmjs.package.design-tokenizer': {
        colophon: {
          helvetica: {
            name: 'Helvetica',
            designer: 'Max Miedinger and Eduard Hoffmann',
            url: 'https://www.linotype.com/1308886/helvetica-family.html'
          },
          arial: {
            name: 'Arial',
            designer: 'Robin Nicholas and Patricia Saunders',
            url: 'https://www.fonts.com/font/monotype/arial'
          }
        }
      }
    }
  }

  it('doesn\'t have a description if the token doesn\'t', () => {
    const actual = addFontFamilyokenToDictionary('typeface.sans', token, before)
    expect(actual['typeface.sans.description']).to.equal(undefined)
  })

  it('adds the description to the dictionary', () => {
    const described = { ...token, $description: 'Sans-serif typeface' }
    const actual = addFontFamilyokenToDictionary('typeface.sans', described, before)
    expect(actual['typeface.sans.description']).to.equal('Sans-serif typeface')
  })

  it('adds the font family value to the dictionary', () => {
    const actual = addFontFamilyokenToDictionary('typeface.sans', token, before)
    expect(actual['typeface.sans']).to.equal('Helvetica, Arial, sans-serif')
  })

  it('doesn\'t add font names if the token has no colohpon', () => {
    const actual = addFontFamilyokenToDictionary('typeface.sans', token, before)
    expect(actual['typeface.sans.helvetica']).to.equal(undefined)
  })

  it('adds font names if the token has a colohpon', () => {
    const actual = addFontFamilyokenToDictionary('typeface.sans', withColophon, before)
    expect(actual['typeface.sans.helvetica']).to.equal('Helvetica')
  })

  it('doesn\'t add font designer if the token has no colohpon', () => {
    const actual = addFontFamilyokenToDictionary('typeface.sans', token, before)
    expect(actual['typeface.sans.helvetica.designer']).to.equal(undefined)
  })

  it('adds font designer if the token has a colohpon', () => {
    const actual = addFontFamilyokenToDictionary('typeface.sans', withColophon, before)
    expect(actual['typeface.sans.helvetica.designer']).to.equal('Max Miedinger and Eduard Hoffmann')
  })

  it('doesn\'t add font URL if the token has no colohpon', () => {
    const actual = addFontFamilyokenToDictionary('typeface.sans', token, before)
    expect(actual['typeface.sans.helvetica.url']).to.equal(undefined)
  })

  it('adds font URL if the token has a colohpon', () => {
    const actual = addFontFamilyokenToDictionary('typeface.sans', withColophon, before)
    expect(actual['typeface.sans.helvetica.url']).to.equal('https://www.linotype.com/1308886/helvetica-family.html')
  })

  it('doesn\'t add an SCSS variable unless there is one', () => {
    const actual = addFontFamilyokenToDictionary('typeface.sans', token, before)
    expect(actual['typeface.sans.scss']).to.equal(undefined)
  })

  it('adds an SCSS variable if there is one', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_typography.scss', variable: 'family-sans' }
        }
      }
    }

    const actual = addFontFamilyokenToDictionary('typeface.sans', sassy, before)
    expect(actual['typeface.sans.scss']).to.equal('$family-sans')
  })

  it('incorporates modules into SCSS variable', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_typography.scss', module: 'typography', variable: 'family-sans' }
        }
      }
    }

    const actual = addFontFamilyokenToDictionary('typefaces.sans', sassy, before)
    expect(actual['typefaces.sans.scss']).to.equal('typography.$family-sans')
  })
})
