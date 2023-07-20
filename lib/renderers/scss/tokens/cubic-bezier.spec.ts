import { expect } from 'chai'
import DerefCubicBezierToken from '../../../types/tokens/dereferenced/cubic-bezier.js'
import renderCubicBezierToken from './cubic-bezier.js'

describe('renderCubicBezierToken', () => {
  it('turns a cubic bézier token into a SCSS variable', () => {
    const token: DerefCubicBezierToken = { $type: 'cubicBezier', $value: [0, 0, 0, 0] }
    expect(renderCubicBezierToken('flat', token)).to.equal('$flat: cubic-bezier(0, 0, 0, 0);')
  })
})
