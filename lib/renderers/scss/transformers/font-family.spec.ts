import { expect } from 'chai'
import transformFontFamily from './font-family.js'

describe('transformFontFamily', () => {
  it('returns the font family string', () => {
    expect(transformFontFamily('"Helvetica"')).to.equal('"Helvetica"')
  })

  it('wraps the font family string in quotes', () => {
    expect(transformFontFamily('Helvetica')).to.equal('"Helvetica"')
  })

  it('doesn\'t wrap serif', () => {
    expect(transformFontFamily('serif')).to.equal('serif')
  })

  it('doesn\'t wrap sans-serif', () => {
    expect(transformFontFamily('sans-serif')).to.equal('sans-serif')
  })

  it('doesn\'t wrap monospace', () => {
    expect(transformFontFamily('monospace')).to.equal('monospace')
  })

  it('doesn\'t wrap cursive', () => {
    expect(transformFontFamily('cursive')).to.equal('cursive')
  })

  it('doesn\'t wrap fantasy', () => {
    expect(transformFontFamily('fantasy')).to.equal('fantasy')
  })

  it('doesn\'t wrap system-ui', () => {
    expect(transformFontFamily('system-ui')).to.equal('system-ui')
  })

  it('doesn\'t wrap ui-serif', () => {
    expect(transformFontFamily('ui-serif')).to.equal('ui-serif')
  })

  it('doesn\'t wrap ui-sans-serif', () => {
    expect(transformFontFamily('ui-sans-serif')).to.equal('ui-sans-serif')
  })

  it('doesn\'t wrap ui-monospace', () => {
    expect(transformFontFamily('ui-monospace')).to.equal('ui-monospace')
  })

  it('doesn\'t wrap ui-rounded', () => {
    expect(transformFontFamily('ui-rounded')).to.equal('ui-rounded')
  })

  it('doesn\'t wrap emoji', () => {
    expect(transformFontFamily('emoji')).to.equal('emoji')
  })

  it('doesn\'t wrap fangsong', () => {
    expect(transformFontFamily('emoji')).to.equal('emoji')
  })

  it('translates a stack array', () => {
    expect(transformFontFamily(['Helvetica', 'Arial', 'sans-serif'])).to.equal('"Helvetica", "Arial", sans-serif')
  })
})
