import { expect } from 'chai'
import getFontFamily from './font-family.js'

describe('getFontFamily', () => {
  it('returns the string if given a string', () => {
    expect(getFontFamily('Helvetica')).to.equal('Helvetica')
  })

  it('joins the array if given an array', () => {
    expect(getFontFamily(['Helvetica', 'Arial', 'sans-serif'])).to.equal('Helvetica, Arial, sans-serif')
  })
})
