import { expect } from 'chai'
import DerefBorderToken from '../../../types/tokens/dereferenced/border.js'
import getBorderCSS from './border.js'

describe('getBorderCSS', () => {
  const solid: DerefBorderToken = { $type: 'border', $value: { color: '#00000080', width: '1px', style: 'solid' } }
  const custom: DerefBorderToken = { $type: 'border', $value: { color: '#00000080', width: '1px', style: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } } }

  it('returns the CSS for a border with a style string', () => {
    expect(getBorderCSS(solid)).to.equal('1px solid #00000080')
  })

  it('returns the CSS for a custom border style as dashed', () => {
    expect(getBorderCSS(custom)).to.equal('1px dashed #00000080')
  })
})
