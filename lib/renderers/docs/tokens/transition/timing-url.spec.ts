import { expect } from 'chai'
import DerefTransitionToken from '../../../../types/tokens/dereferenced/transition.js'
import getTransitionTimingURL from './timing-url.js'

describe('getTransitionTimingURL', () => {
  it('returns the timing function as a link to cubic-bezier.com', () => {
    const token: DerefTransitionToken = { $type: 'transition', $value: { duration: '200ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } }
    expect(getTransitionTimingURL(token)).to.equal('https://cubic-bezier.com/#0,0,0,0')
  })
})
