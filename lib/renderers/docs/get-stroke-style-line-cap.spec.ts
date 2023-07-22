import { expect } from 'chai'
import DerefStrokeStyleToken from '../../types/tokens/dereferenced/stroke-style.js'
import getStrokeStyleLineCap from './get-stroke-style-line-cap.js'

describe('getStrokeStyleLineCap', () => {
  it('returns the token\'s value if it\'s a string', () => {
    const token: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: 'solid' }
    expect(getStrokeStyleLineCap(token)).to.equal('solid')
  })

  it('returns the line cap if it has one', () => {
    const token: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } }
    expect(getStrokeStyleLineCap(token)).to.equal('round')
  })
})
