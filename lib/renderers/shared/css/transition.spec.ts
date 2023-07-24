import { expect } from 'chai'
import DerefTransitionToken from '../../../types/tokens/dereferenced/transition.js'
import getTransitionCSS from './transition.js'

describe('getTransitionCSS', () => {
  const token: DerefTransitionToken = { $type: 'transition', $value: { duration: '200ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } }

  it('returns the CSS for a transition token', () => {
    expect(getTransitionCSS(token)).to.equal('200ms cubic-bezier(0, 0, 0, 0) 0ms')
  })
})
