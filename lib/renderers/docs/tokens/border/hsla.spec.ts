import { expect } from 'chai'
import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getBorderHSLA from './hsla.js'

describe('getBorderHSLA', () => {
  it('returns the HSLA of the border color', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#008800', width: '1px', style: 'solid' } }
    expect(getBorderHSLA(token)).to.equal('120°, 100, 27, 1')
  })
})
