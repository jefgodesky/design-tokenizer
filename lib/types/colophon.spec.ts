import { expect } from 'chai'
import { isColophon } from './colophon.js'

describe('isColophon', () => {
  const helvetica = {
    name: 'Helvetica',
    designer: 'Max Miedinger and Eduard Hoffmann',
    url: 'https://www.linotype.com/1308886/helvetica-family.html'
  }

  const arial = {
    name: 'Arial',
    designer: 'Robin Nicholas and Patricia Saunders',
    url: 'https://www.fonts.com/font/monotype/arial'
  }

  it('rejects undefined', () => {
    expect(isColophon(undefined)).to.equal(false)
  })

  it('rejects null', () => {
    expect(isColophon(null)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isColophon(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isColophon(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isColophon(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isColophon(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isColophon('Helvetica')).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isColophon([])).to.equal(false)
  })

  it('accepts empty objects', () => {
    expect(isColophon({})).to.equal(true)
  })

  it('rejects arbitrary objects', () => {
    expect(isColophon({ a: 1 })).to.equal(false)
  })

  it('accepts objects where each property has name, designer, and url strings', () => {
    expect(isColophon({ helvetica, arial })).to.equal(true)
  })
})
