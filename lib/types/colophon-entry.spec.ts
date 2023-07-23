import { expect } from 'chai'
import { isColophonEntry } from './colophon-entry.js'

describe('isColophonEntryEntry', () => {
  const helvetica = {
    name: 'Helvetica',
    designer: 'Max Miedinger and Eduard Hoffmann',
    url: 'https://www.linotype.com/1308886/helvetica-family.html'
  }

  it('rejects undefined', () => {
    expect(isColophonEntry(undefined)).to.equal(false)
  })

  it('rejects null', () => {
    expect(isColophonEntry(null)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isColophonEntry(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isColophonEntry(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isColophonEntry(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isColophonEntry(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isColophonEntry(helvetica.name)).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isColophonEntry([])).to.equal(false)
  })

  it('rejects empty objects', () => {
    expect(isColophonEntry({})).to.equal(false)
  })

  it('accepts objects with a name, designer, and url', () => {
    expect(isColophonEntry(helvetica)).to.equal(true)
  })

  it('rejects objects with no name', () => {
    expect(isColophonEntry({ designer: helvetica.designer, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with an undefined name', () => {
    expect(isColophonEntry({ name: undefined, designer: helvetica.designer, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with a null name', () => {
    expect(isColophonEntry({ name: null, designer: helvetica.designer, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with a function name', () => {
    expect(isColophonEntry({ name: () => {}, designer: helvetica.designer, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with a true name', () => {
    expect(isColophonEntry({ name: true, designer: helvetica.designer, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with a false name', () => {
    expect(isColophonEntry({ name: false, designer: helvetica.designer, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with a number name', () => {
    expect(isColophonEntry({ name: 1, designer: helvetica.designer, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with an array name', () => {
    expect(isColophonEntry({ name: [], designer: helvetica.designer, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with an object name', () => {
    expect(isColophonEntry({ name: {}, designer: helvetica.designer, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with no designer', () => {
    expect(isColophonEntry({ name: helvetica.name, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with an undefined designer', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: undefined, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with a null designer', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: null, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with a function designer', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: () => {}, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with a true designer', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: true, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with a false designer', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: false, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with a number designer', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: 1, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with an array designer', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: [], url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with an object designer', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: {}, url: helvetica.url })).to.equal(false)
  })

  it('rejects objects with no URL', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: helvetica.designer })).to.equal(false)
  })

  it('rejects objects with an undefined URL', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: helvetica.designer, url: undefined })).to.equal(false)
  })

  it('rejects objects with a null URL', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: helvetica.designer, url: null })).to.equal(false)
  })

  it('rejects objects with a function URL', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: helvetica.designer, url: () => {} })).to.equal(false)
  })

  it('rejects objects with a true URL', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: helvetica.designer, url: true })).to.equal(false)
  })

  it('rejects objects with a false URL', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: helvetica.designer, url: false })).to.equal(false)
  })

  it('rejects objects with a number URL', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: helvetica.designer, url: 1 })).to.equal(false)
  })

  it('rejects objects with an array URL', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: helvetica.designer, url: [] })).to.equal(false)
  })

  it('rejects objects with an object URL', () => {
    expect(isColophonEntry({ name: helvetica.name, designer: helvetica.designer, url: {} })).to.equal(false)
  })
})
