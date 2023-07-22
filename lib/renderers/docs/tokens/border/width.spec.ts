import { expect } from 'chai'
import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getBorderWidth from './width.js'

describe('getBorderWidth', () => {
  it('returns the border width', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#000000', width: '1px', style: 'solid' } }
    expect(getBorderWidth(token)).to.equal('1px')
  })
})
