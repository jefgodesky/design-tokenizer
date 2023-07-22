import { expect } from 'chai'
import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getBorderHex from './hex.js'

describe('getBorderHex', () => {
  it('returns the border\'s 24-bit hexadecimal color code', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#008800', width: '1px', style: 'solid' } }
    expect(getBorderHex(token)).to.equal('#008800')
  })

  it('returns the border\'s 24+8 bit hexadecimal color code', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#008800ff', width: '1px', style: 'solid' } }
    expect(getBorderHex(token)).to.equal('#008800ff')
  })
})
