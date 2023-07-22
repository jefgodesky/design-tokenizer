import { expect } from 'chai'
import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getBorderRGBA from './rgba.js'

describe('getBorderRGBA', () => {
  it('returns the RGBA of the border color', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#008800', width: '1px', style: 'solid' } }
    expect(getBorderRGBA(token)).to.equal('0, 136, 0, 1')
  })
})
