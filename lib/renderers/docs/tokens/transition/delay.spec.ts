import { expect } from 'chai'
import DerefTransitionToken from '../../../../types/tokens/dereferenced/transition.js'
import getTransitionDelay from './delay.js'

describe('getTransitionDelay', () => {
  it('returns the delay', () => {
    const token: DerefTransitionToken = { $type: 'transition', $value: { duration: '200ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } }
    expect(getTransitionDelay(token)).to.equal('0ms')
  })
})
