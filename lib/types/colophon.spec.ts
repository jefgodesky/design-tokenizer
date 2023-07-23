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

  it('rejects a colophon with an entry with no name', () => {
    const entry = { designer: helvetica.designer, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with an undefined name', () => {
    const entry = { name: undefined, designer: helvetica.designer, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a null name', () => {
    const entry = { name: null, designer: helvetica.designer, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a function name', () => {
    const entry = { name: () => {}, designer: helvetica.designer, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a true name', () => {
    const entry = { name: true, designer: helvetica.designer, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a false name', () => {
    const entry = { name: false, designer: helvetica.designer, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a number name', () => {
    const entry = { name: 1, designer: helvetica.designer, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with an array name', () => {
    const entry = { name: [], designer: helvetica.designer, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with an object name', () => {
    const entry = { name: {}, designer: helvetica.designer, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with no designer', () => {
    const entry = { name: helvetica.name, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with an undefined designer', () => {
    const entry = { name: helvetica.name, designer: undefined, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a null designer', () => {
    const entry = { name: helvetica.name, designer: null, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a function designer', () => {
    const entry = { name: helvetica.name, designer: () => {}, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a true designer', () => {
    const entry = { name: helvetica.name, designer: true, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a false designer', () => {
    const entry = { name: helvetica.name, designer: false, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a number designer', () => {
    const entry = { name: helvetica.name, designer: 1, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with an array designer', () => {
    const entry = { name: helvetica.name, designer: [], url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with an object designer', () => {
    const entry = { name: helvetica.name, designer: {}, url: helvetica.url }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with no URL', () => {
    const entry = { name: helvetica.name, designer: helvetica.designer }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with an undefined URL', () => {
    const entry = { name: helvetica.name, designer: helvetica.designer, url: undefined }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a null URL', () => {
    const entry = { name: helvetica.name, designer: helvetica.designer, url: null }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a function URL', () => {
    const entry = { name: helvetica.name, designer: helvetica.designer, url: () => {} }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a true URL', () => {
    const entry = { name: helvetica.name, designer: helvetica.designer, url: true }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a false URL', () => {
    const entry = { name: helvetica.name, designer: helvetica.designer, url: false }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with a number URL', () => {
    const entry = { name: helvetica.name, designer: helvetica.designer, url: 1 }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with an array URL', () => {
    const entry = { name: helvetica.name, designer: helvetica.designer, url: [] }
    expect(isColophon({ entry })).to.equal(false)
  })

  it('rejects a colophon with an entry with an object URL', () => {
    const entry = { name: helvetica.name, designer: helvetica.designer, url: {} }
    expect(isColophon({ entry })).to.equal(false)
  })
})
