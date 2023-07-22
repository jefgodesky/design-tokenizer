import { expect } from 'chai'
import DerefStrokeStyleToken from '../../types/tokens/dereferenced/stroke-style.js'
import getStrokeStyleDashArray from './get-stroke-style-dash-array.js'

describe('getStrokeStyleDashArray', () => {
  it('returns the token\'s value if it\'s a string', () => {
    const token: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: 'solid' }
    expect(getStrokeStyleDashArray(token)).to.equal('solid')
  })

  it('returns the dash array if it has one', () => {
    const token: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } }
    expect(getStrokeStyleDashArray(token)).to.equal('0.5rem, 0.25rem')
  })
})
