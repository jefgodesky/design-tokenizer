import { expect } from 'chai'
import DerefCubicBezierToken from '../../../../types/tokens/dereferenced/cubic-bezier.js'
import getCubicBezierTokenString from './string.js'

describe('getCubicBezierString', () => {
  it('creates a string from a cubic bézier token', () => {
    const curve: DerefCubicBezierToken = { $type: 'cubicBezier', $value: [0, 0, 0, 0] }
    expect(getCubicBezierTokenString(curve)).to.equal('0, 0, 0, 0')
  })
})
