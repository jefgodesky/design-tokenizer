import { expect } from 'chai'
import DerefBorderToken from '../../types/tokens/dereferenced/border.js'
import getBorderStyleLineCap from './get-border-style-line-cap.js'

describe('getBorderStyleLineCap', () => {
  it('returns the border style if it\'s a string', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#000000', width: '1px', style: 'solid' } }
    expect(getBorderStyleLineCap(token)).to.equal('solid')
  })

  it('returns the line cap if the border style is an object', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#000000', width: '1px', style: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } } }
    expect(getBorderStyleLineCap(token)).to.equal('round')
  })
})
