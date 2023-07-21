import { expect } from 'chai'
import getDashArray from './get-dash-array.js'

describe('getDashArray', () => {
  it('returns a string to represent an array of dimensions', () => {
    expect(getDashArray(['0.5rem', '0.25rem'])).to.equal('0.5rem, 0.25rem')
  })
})
