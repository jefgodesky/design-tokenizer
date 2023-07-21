import { expect } from 'chai'
import { isFontFamilyDoc } from './font-family.js'

describe('isFontFamilyDoc', () => {
  const name = 'Helvetica'
  const designer = 'Max Miedinger and Eduard Hoffmann'
  const url = 'https://www.linotype.com/1308886/helvetica-family.html'

  it('rejects undefined', () => {
    expect(isFontFamilyDoc(undefined)).to.equal(false)
  })

  it('rejects null', () => {
    expect(isFontFamilyDoc(null)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isFontFamilyDoc(() => {})).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isFontFamilyDoc(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isFontFamilyDoc(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isFontFamilyDoc(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isFontFamilyDoc(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isFontFamilyDoc('Helvetica')).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isFontFamilyDoc([])).to.equal(false)
  })

  it('rejects empty objects', () => {
    expect(isFontFamilyDoc({})).to.equal(false)
  })

  it('accepts valid objects', () => {
    expect(isFontFamilyDoc({ name, designer, url })).to.equal(true)
  })

  it('rejects an object with no name', () => {
    expect(isFontFamilyDoc({ designer, url })).to.equal(false)
  })

  it('rejects an object with an undefined name', () => {
    expect(isFontFamilyDoc({ name: undefined, designer, url })).to.equal(false)
  })

  it('rejects an object with a null name', () => {
    expect(isFontFamilyDoc({ name: null, designer, url })).to.equal(false)
  })

  it('rejects an object with a function name', () => {
    expect(isFontFamilyDoc({ name: () => {}, designer, url })).to.equal(false)
  })

  it('rejects an object with a true name', () => {
    expect(isFontFamilyDoc({ name: true, designer, url })).to.equal(false)
  })

  it('rejects an object with a false name', () => {
    expect(isFontFamilyDoc({ name: false, designer, url })).to.equal(false)
  })

  it('rejects an object with a number name', () => {
    expect(isFontFamilyDoc({ name: 1, designer, url })).to.equal(false)
  })

  it('rejects an object with an array name', () => {
    expect(isFontFamilyDoc({ name: [name], designer, url })).to.equal(false)
  })

  it('rejects an object with an object name', () => {
    expect(isFontFamilyDoc({ name: { name }, designer, url })).to.equal(false)
  })

  it('rejects an object with no designer', () => {
    expect(isFontFamilyDoc({ name, url })).to.equal(false)
  })

  it('rejects an object with an undefined designer', () => {
    expect(isFontFamilyDoc({ name, designer: undefined, url })).to.equal(false)
  })

  it('rejects an object with a null designer', () => {
    expect(isFontFamilyDoc({ name, designer: null, url })).to.equal(false)
  })

  it('rejects an object with a function designer', () => {
    expect(isFontFamilyDoc({ name, designer: () => {}, url })).to.equal(false)
  })

  it('rejects an object with a true designer', () => {
    expect(isFontFamilyDoc({ name, designer: true, url })).to.equal(false)
  })

  it('rejects an object with a false designer', () => {
    expect(isFontFamilyDoc({ name, designer: false, url })).to.equal(false)
  })

  it('rejects an object with a number designer', () => {
    expect(isFontFamilyDoc({ name, designer: 1, url })).to.equal(false)
  })

  it('rejects an object with an array designer', () => {
    expect(isFontFamilyDoc({ name, designer: [designer], url })).to.equal(false)
  })

  it('rejects an object with an object designer', () => {
    expect(isFontFamilyDoc({ name, designer: { designer }, url })).to.equal(false)
  })

  it('rejects an object with no url', () => {
    expect(isFontFamilyDoc({ name, designer })).to.equal(false)
  })

  it('rejects an object with an undefined url', () => {
    expect(isFontFamilyDoc({ name, designer, url: undefined })).to.equal(false)
  })

  it('rejects an object with a null url', () => {
    expect(isFontFamilyDoc({ name, designer, url: null })).to.equal(false)
  })

  it('rejects an object with a function url', () => {
    expect(isFontFamilyDoc({ name, designer, url: () => {} })).to.equal(false)
  })

  it('rejects an object with a true url', () => {
    expect(isFontFamilyDoc({ name, designer, url: true })).to.equal(false)
  })

  it('rejects an object with a false url', () => {
    expect(isFontFamilyDoc({ name, designer, url: false })).to.equal(false)
  })

  it('rejects an object with a number url', () => {
    expect(isFontFamilyDoc({ name, designer, url: 1 })).to.equal(false)
  })

  it('rejects an object with an array url', () => {
    expect(isFontFamilyDoc({ name, designer, url: [url] })).to.equal(false)
  })

  it('rejects an object with an object url', () => {
    expect(isFontFamilyDoc({ name, designer, url: { url } })).to.equal(false)
  })
})
