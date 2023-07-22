import { expect } from 'chai'
import DerefDimensionToken from '../../../../types/tokens/dereferenced/dimension.js'
import getDimension from './dimension.js'

describe('getDimension', () => {
  it('returns the dimension', () => {
    const token: DerefDimensionToken = { $type: 'dimension', $value: '1rem' }
    expect(getDimension(token)).to.equal('1rem')
  })
})
