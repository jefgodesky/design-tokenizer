import { expect } from 'chai'
import DerefNumberToken from '../../../../types/tokens/dereferenced/number.js'
import getNumber from './number.js'

describe('getNumber', () => {
  it('returns the number as a string', () => {
    const token: DerefNumberToken = { $type: 'number', $value: 0 }
    expect(getNumber(token)).to.equal('0')
  })
})
