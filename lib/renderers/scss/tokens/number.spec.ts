import { expect } from 'chai'
import DerefNumberToken from '../../../types/tokens/dereferenced/number.js'
import renderNumberToken from './number.js'

describe('renderNumberToken', () => {
  it('turns a number token into a SCSS variable', () => {
    const token: DerefNumberToken = { $type: 'number', $value: 0 }
    expect(renderNumberToken('nil', token)).to.equal('$nil: 0;')
  })
})
