import { expect } from 'chai'
import DerefDimensionToken from '../../../types/tokens/dereferenced/dimension.js'
import renderDimensionToken from './dimension.js'

describe('renderDimensionToken', () => {
  it('turns a dimension token into a SCSS variable', () => {
    const token: DerefDimensionToken = { $type: 'dimension', $value: '1rem' }
    expect(renderDimensionToken('basic', token)).to.equal('$basic: 1rem;')
  })
})
