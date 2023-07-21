import { expect } from 'chai'
import DerefCubicBezierToken from '../../types/tokens/dereferenced/cubic-bezier.js'
import getCubicBezierURL from './get-cubic-bezier-url.js'

describe('getCubicBezierURL', () => {
  it('creates a URL that shows cubic bézier on cubic-bezier.com', () => {
    const curve: DerefCubicBezierToken = { $type: 'cubicBezier', $value: [0, 0, 0, 0] }
    expect(getCubicBezierURL(curve)).to.equal('https://cubic-bezier.com/#0,0,0,0')
  })
})
