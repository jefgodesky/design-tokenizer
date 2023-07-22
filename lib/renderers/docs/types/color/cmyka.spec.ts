import { expect } from 'chai'
import getCMYKA from './cmyka.js'

describe('getCMYKA', () => {
  it('returns the CMYKA', () => {
    expect(getCMYKA('#008800')).to.equal('100, 0, 100, 47, 1')
  })
})
