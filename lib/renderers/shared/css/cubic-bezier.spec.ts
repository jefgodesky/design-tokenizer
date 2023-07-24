import { expect } from 'chai'
import CubicBezier from '../../../types/basic/cubic-bezier.js'
import getCubicBezierCSS from './cubic-bezier.js'

describe('getCubicBezierCSS', () => {
  const flat: CubicBezier = [0, 0, 0, 0]

  it('returns the CSS for a cubic bézier', () => {
    expect(getCubicBezierCSS(flat)).to.equal('cubic-bezier(0, 0, 0, 0)')
  })
})
