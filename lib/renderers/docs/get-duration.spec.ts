import { expect } from 'chai'
import DerefDurationToken from '../../types/tokens/dereferenced/duration.js'
import getDuration from './get-duration.js'

describe('getDuration', () => {
  it('returns the duration', () => {
    const token: DerefDurationToken = { $type: 'duration', $value: '1000ms' }
    expect(getDuration(token)).to.equal('1000ms')
  })
})
