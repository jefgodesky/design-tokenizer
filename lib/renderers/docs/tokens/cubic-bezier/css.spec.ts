import { expect } from 'chai'
import DerefCubicBezierToken from '../../../../types/tokens/dereferenced/cubic-bezier.js'
import getCubicBezierTokenCSS from './css.js'

describe('getCubicBezierTokenCSS', () => {
  it('creates CSS rule for the cubic bézier', () => {
    const curve: DerefCubicBezierToken = { $type: 'cubicBezier', $value: [0, 0, 0, 0] }
    expect(getCubicBezierTokenCSS(curve)).to.equal('cubic-bezier(0, 0, 0, 0)')
  })
})
