import { expect } from 'chai'
import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getBorderStyleDashArray from './dash-array.js'

describe('getBorderStyleDashArray', () => {
  it('returns the style if it\'s a string', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#000000', width: '1px', style: 'solid' } }
    expect(getBorderStyleDashArray(token)).to.equal('solid')
  })

  it('returns the dash array if the style is an object', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#000000', width: '1px', style: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } } }
    expect(getBorderStyleDashArray(token)).to.equal('0.5rem, 0.25rem')
  })
})
