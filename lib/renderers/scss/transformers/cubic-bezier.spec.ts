import { expect } from 'chai'
import transformCubicBezier from './cubic-bezier.js'

describe('transformCubicBezier', () => {
  it('transforms a cubic bézier into a string ready for SCSS', () => {
    expect(transformCubicBezier([0, 0, 0, 0])).to.equal('cubic-bezier(0, 0, 0, 0)')
  })
})
