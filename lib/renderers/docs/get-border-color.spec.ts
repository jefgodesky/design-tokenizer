import { expect } from 'chai'
import DerefBorderToken from '../../types/tokens/dereferenced/border.js'
import getBorderColor from './get-border-color.js'

describe('getBorderColor', () => {
  it('returns the border color', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#000000', width: '1px', style: 'solid' } }
    expect(getBorderColor(token)).to.equal('#000000')
  })
})
