import { expect } from 'chai'
import DerefStrokeStyleToken from '../../../../types/tokens/dereferenced/stroke-style.js'
import getStrokeStyleLineCap from './line-cap.js'

describe('getStrokeStyleLineCap', () => {
  it('returns the style if it\'s a string', () => {
    const token: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: 'solid' }
    expect(getStrokeStyleLineCap(token)).to.equal('solid')
  })

  it('returns line cap if the style is an object', () => {
    const token: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } }
    expect(getStrokeStyleLineCap(token)).to.equal('round')
  })
})
