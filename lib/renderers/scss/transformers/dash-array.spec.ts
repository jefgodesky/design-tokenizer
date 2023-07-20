import { expect } from 'chai'
import transformDashArray from './dash-array.js'

describe('transformDashArray', () => {
  it('returns a string', () => {
    expect(transformDashArray(['0.5rem', '0.25rem'])).to.equal('0.5rem 0.25rem')
  })
})
