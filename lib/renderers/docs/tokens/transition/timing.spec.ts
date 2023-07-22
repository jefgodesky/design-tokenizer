import { expect } from 'chai'
import DerefTransitionToken from '../../../../types/tokens/dereferenced/transition.js'
import getTransitionTimingFunction from './timing.js'

describe('getTransitionTimingFunction', () => {
  it('returns the timing function as a string', () => {
    const token: DerefTransitionToken = { $type: 'transition', $value: { duration: '200ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } }
    expect(getTransitionTimingFunction(token)).to.equal('0, 0, 0, 0')
  })
})
