import { expect } from 'chai'
import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import addTypographyToDictionary from './dictionary.js'

describe('addTypographyToDictionary', () => {
  const before = {}
  const token: DerefTypographyToken = {
    $type: 'typography',
    $value: {
      fontFamily: ['Helvetica', 'Arial', 'sans-serif'],
      fontSize: '1rem',
      fontWeight: 'normal',
      letterSpacing: '0rem',
      lineHeight: 1.2
    }
  }

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
    const actual = addTypographyToDictionary('typography.body', token, before)
    expect(actual['typography.body.description']).to.equal(undefined)
  })

  it('adds the description to the dictionary', () => {
    const described = { ...token, $description: 'Body text' }
    const actual = addTypographyToDictionary('typography.body', described, before)
    expect(actual['typography.body.description']).to.equal('Body text')
  })

  it('adds the font family value to the dictionary', () => {
    const actual = addTypographyToDictionary('typography.body', token, before)
    expect(actual['typography.body.family']).to.equal('Helvetica, Arial, sans-serif')
  })

  it('adds the font size to the dictionary', () => {
    const actual = addTypographyToDictionary('typography.body', token, before)
    expect(actual['typography.body.size']).to.equal('1rem')
  })

  it('adds the font weight to the dictionary', () => {
    const actual = addTypographyToDictionary('typography.body', token, before)
    expect(actual['typography.body.weight']).to.equal('normal')
  })

  it('adds numerical font weight to the dictionary', () => {
    const num: DerefTypographyToken = { $type: 'typography', $value: Object.assign({}, token.$value, { fontWeight: 400 }) }
    const actual = addTypographyToDictionary('typography.body', num, before)
    expect(actual['typography.body.weight']).to.equal('400')
  })

  it('adds the letter spacing to the dictionary', () => {
    const actual = addTypographyToDictionary('typography.body', token, before)
    expect(actual['typography.body.spacing.letter']).to.equal('0rem')
  })

  it('adds the line height to the dictionary', () => {
    const actual = addTypographyToDictionary('typography.body', token, before)
    expect(actual['typography.body.spacing.line']).to.equal('1.2')
  })

  it('adds the absolute line height to the dictionary', () => {
    const actual = addTypographyToDictionary('typography.body', token, before)
    expect(actual['typography.body.spacing.line.abs']).to.equal('1.20rem')
  })

  it('doesn\'t add the font style to the dictionary if there isn\'t one', () => {
    const actual = addTypographyToDictionary('typography.body', token, before)
    expect(actual['typography.body.style']).to.equal(undefined)
  })

  it('adds the font style to the dictionary if it exists', () => {
    const styled: DerefTypographyToken = { $type: 'typography', $value: { ...token.$value, fontStyle: 'italic' } }
    const actual = addTypographyToDictionary('typography.body', styled, before)
    expect(actual['typography.body.style']).to.equal('italic')
  })

  it('doesn\'t add font names if the token has no colohpon', () => {
    const actual = addTypographyToDictionary('typography.body', token, before)
    expect(actual['typography.body.helvetica']).to.equal(undefined)
  })

  it('adds font names if the token has a colohpon', () => {
    const actual = addTypographyToDictionary('typography.body', withColophon, before)
    expect(actual['typography.body.helvetica']).to.equal('Helvetica')
  })

  it('doesn\'t add font designer if the token has no colohpon', () => {
    const actual = addTypographyToDictionary('typography.body', token, before)
    expect(actual['typography.body.helvetica.designer']).to.equal(undefined)
  })

  it('adds font designer if the token has a colohpon', () => {
    const actual = addTypographyToDictionary('typography.body', withColophon, before)
    expect(actual['typography.body.helvetica.designer']).to.equal('Max Miedinger and Eduard Hoffmann')
  })

  it('doesn\'t add font URL if the token has no colohpon', () => {
    const actual = addTypographyToDictionary('typography.body', token, before)
    expect(actual['typography.body.helvetica.url']).to.equal(undefined)
  })

  it('adds font URL if the token has a colohpon', () => {
    const actual = addTypographyToDictionary('typography.body', withColophon, before)
    expect(actual['typography.body.helvetica.url']).to.equal('https://www.linotype.com/1308886/helvetica-family.html')
  })

  it('adds CSS to the dictionary', () => {
    const actual = addTypographyToDictionary('typography.body', token, before)
    expect(actual['typography.body.css']).to.equal('normal 1rem/1.20rem "Helvetica", "Arial", sans-serif')
  })

  it('doesn\'t add an SCSS variable unless there is one', () => {
    const actual = addTypographyToDictionary('typography.body', token, before)
    expect(actual['typography.body.scss']).to.equal(undefined)
  })

  it('adds an SCSS variable if there is one', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_typography.scss', variable: 'body' }
        }
      }
    }

    const actual = addTypographyToDictionary('typography.body', sassy, before)
    expect(actual['typography.body.scss']).to.equal('$body')
  })

  it('incorporates modules into SCSS variable', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_typography.scss', module: 'typography', variable: 'body' }
        }
      }
    }

    const actual = addTypographyToDictionary('typefaces.sans', sassy, before)
    expect(actual['typefaces.sans.scss']).to.equal('typography.$body')
  })
})
