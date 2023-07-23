import { expect } from 'chai'
import { isExtension } from './extension.js'

describe('isExtension', () => {
  it('rejects undefined', () => {
    expect(isExtension(undefined)).to.equal(false)
  })

  it('rejects null', () => {
    expect(isExtension(null)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isExtension(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isExtension(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isExtension(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isExtension(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isExtension('test')).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isExtension([])).to.equal(false)
  })

  it('accepts empty objects', () => {
    expect(isExtension({})).to.equal(true)
  })

  it('rejects objects with arbitrary properties', () => {
    expect(isExtension({ a: 1 })).to.equal(false)
  })

  it('accepts an object with an undefined SCSS property', () => {
    expect(isExtension({ scss: undefined })).to.equal(true)
  })

  it('rejects an object with a null SCSS property', () => {
    expect(isExtension({ scss: null })).to.equal(false)
  })

  it('rejects an object with a function SCSS property', () => {
    expect(isExtension({ scss: () => {} })).to.equal(false)
  })

  it('rejects an object with a true SCSS property', () => {
    expect(isExtension({ scss: true })).to.equal(false)
  })

  it('rejects an object with a false SCSS property', () => {
    expect(isExtension({ scss: null })).to.equal(false)
  })

  it('rejects an object with a number SCSS property', () => {
    expect(isExtension({ scss: 1 })).to.equal(false)
  })

  it('rejects an object with a string SCSS property', () => {
    expect(isExtension({ scss: 'test' })).to.equal(false)
  })

  it('rejects an object with an array SCSS property', () => {
    expect(isExtension({ scss: [] })).to.equal(false)
  })

  it('rejects an object with an empty object SCSS property', () => {
    expect(isExtension({ scss: {} })).to.equal(false)
  })

  it('rejects an object with an invalid object SCSS property', () => {
    expect(isExtension({ scss: { a: 1 } })).to.equal(false)
  })

  it('accepts an object with a invalid object SCSS property', () => {
    expect(isExtension({ scss: { file: '_test.scss', variable: '$test' } })).to.equal(true)
  })

  it('accepts an object with an undefined colophon property', () => {
    expect(isExtension({ colophon: undefined })).to.equal(true)
  })

  it('rejects an object with a null colophon property', () => {
    expect(isExtension({ colophon: null })).to.equal(false)
  })

  it('rejects an object with a function colophon property', () => {
    expect(isExtension({ colophon: () => {} })).to.equal(false)
  })

  it('rejects an object with a true colophon property', () => {
    expect(isExtension({ colophon: true })).to.equal(false)
  })

  it('rejects an object with a false colophon property', () => {
    expect(isExtension({ colophon: null })).to.equal(false)
  })

  it('rejects an object with a number colophon property', () => {
    expect(isExtension({ colophon: 1 })).to.equal(false)
  })

  it('rejects an object with a string colophon property', () => {
    expect(isExtension({ colophon: 'test' })).to.equal(false)
  })

  it('rejects an object with an array colophon property', () => {
    expect(isExtension({ colophon: [] })).to.equal(false)
  })

  it('accepts an object with an empty object colophon property', () => {
    expect(isExtension({ colophon: {} })).to.equal(true)
  })

  it('rejects an object with a colophon with arbitrary properties', () => {
    expect(isExtension({ colophon: { a: 1 } })).to.equal(false)
  })

  it('accepts an object with a valid colophon', () => {
    const helvetica = {
      name: 'Helvetica',
      designer: 'Max Miedinger and Eduard Hoffmann',
      url: 'https://www.linotype.com/1308886/helvetica-family.html'
    }
    expect(isExtension({ colophon: { helvetica } })).to.equal(true)
  })
})
