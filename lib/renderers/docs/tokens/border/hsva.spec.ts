import { expect } from 'chai'
import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getBorderHSVA from './hsva.js'

describe('getBorderHSVA', () => {
  it('returns the HSVA of the border color', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#008800', width: '1px', style: 'solid' } }
    expect(getBorderHSVA(token)).to.equal('120°, 100, 53, 1')
  })
})
