import { expect } from 'chai'
import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getBorderCMYKA from './cmyka.js'

describe('getBorderCMYKA', () => {
  it('returns the CMYKA of the border color', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#008800', width: '1px', style: 'solid' } }
    expect(getBorderCMYKA(token)).to.equal('100, 0, 100, 47, 1')
  })
})
