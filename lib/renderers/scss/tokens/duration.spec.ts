import { expect } from 'chai'
import DerefDurationToken from '../../../types/tokens/dereferenced/duration.js'
import renderDurationToken from './duration.js'

describe('renderDurationToken', () => {
  it('turns a duration token into a SCSS variable', () => {
    const token: DerefDurationToken = { $type: 'duration', $value: '1000ms' }
    expect(renderDurationToken('mid', token)).to.equal('$mid: 1000ms;')
  })
})
