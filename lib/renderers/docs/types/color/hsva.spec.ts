import { expect } from 'chai'
import getHSVA from './hsva.js'

describe('getHSVA', () => {
  it('returns the HSVA', () => {
    expect(getHSVA('#008800')).to.equal('120°, 100, 53, 1')
  })
})
