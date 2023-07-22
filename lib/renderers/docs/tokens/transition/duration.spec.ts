import { expect } from 'chai'
import DerefTransitionToken from '../../../../types/tokens/dereferenced/transition.js'
import getTransitionDuration from './duration.js'

describe('getTransitionDuration', () => {
  it('returns the duration', () => {
    const token: DerefTransitionToken = { $type: 'transition', $value: { duration: '200ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } }
    expect(getTransitionDuration(token)).to.equal('200ms')
  })
})
