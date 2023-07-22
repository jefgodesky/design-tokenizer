import { expect } from 'chai'
import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getBorderStyle from './style.js'

describe('getBorderStyle', () => {
  it('returns the style if it\'s a string', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#000000', width: '1px', style: 'solid' } }
    expect(getBorderStyle(token)).to.equal('solid')
  })

  it('returns dashed if the style is an object', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#000000', width: '1px', style: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } } }
    expect(getBorderStyle(token)).to.equal('dashed')
  })
})
