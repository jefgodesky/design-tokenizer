import { expect } from 'chai'
import getFontFamilyCSS from './font-family.js'

describe('getFontFamilyCSS', () => {
  it('wraps the font family string in quotes', () => {
    expect(getFontFamilyCSS('Helvetica')).to.equal('"Helvetica"')
  })

  it('doesn\'t double wrap', () => {
    expect(getFontFamilyCSS('"Helvetica"')).to.equal('"Helvetica"')
  })

  it('doesn\'t wrap serif', () => {
    expect(getFontFamilyCSS('serif')).to.equal('serif')
  })

  it('doesn\'t wrap sans-serif', () => {
    expect(getFontFamilyCSS('sans-serif')).to.equal('sans-serif')
  })

  it('doesn\'t wrap monospace', () => {
    expect(getFontFamilyCSS('monospace')).to.equal('monospace')
  })

  it('doesn\'t wrap cursive', () => {
    expect(getFontFamilyCSS('cursive')).to.equal('cursive')
  })

  it('doesn\'t wrap fantasy', () => {
    expect(getFontFamilyCSS('fantasy')).to.equal('fantasy')
  })

  it('doesn\'t wrap system-ui', () => {
    expect(getFontFamilyCSS('system-ui')).to.equal('system-ui')
  })

  it('doesn\'t wrap ui-serif', () => {
    expect(getFontFamilyCSS('ui-serif')).to.equal('ui-serif')
  })

  it('doesn\'t wrap ui-sans-serif', () => {
    expect(getFontFamilyCSS('ui-sans-serif')).to.equal('ui-sans-serif')
  })

  it('doesn\'t wrap ui-monospace', () => {
    expect(getFontFamilyCSS('ui-monospace')).to.equal('ui-monospace')
  })

  it('doesn\'t wrap ui-rounded', () => {
    expect(getFontFamilyCSS('ui-rounded')).to.equal('ui-rounded')
  })

  it('doesn\'t wrap emoji', () => {
    expect(getFontFamilyCSS('emoji')).to.equal('emoji')
  })

  it('doesn\'t wrap fangsong', () => {
    expect(getFontFamilyCSS('emoji')).to.equal('emoji')
  })

  it('translates a stack array', () => {
    expect(getFontFamilyCSS(['Helvetica', 'Arial', 'sans-serif'])).to.equal('"Helvetica", "Arial", sans-serif')
  })
})
