import { expect } from 'chai'
import DerefTransitionToken from '../../../types/tokens/dereferenced/transition.js'
import renderTransitionToken from './transition.js'

describe('renderTransitionToken', () => {
  it('renders a transition token as an SCSS variable', () => {
    const token: DerefTransitionToken = { $type: 'transition', $value: { duration: '200ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } }
    expect(renderTransitionToken('standard', token)).to.equal('$standard: 200ms cubic-bezier(0, 0, 0, 0) 0ms;')
  })
})
