import { expect } from 'chai'
import getDashArrayCSS from './dash-array.js'

describe('getDashArrayCSS', () => {
  it('returns CSS for the dash array', () => {
    expect(getDashArrayCSS(['0.5rem', '0.25rem'])).to.equal('0.5rem 0.25rem')
  })
})
