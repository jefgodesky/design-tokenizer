import { expect } from 'chai'
import DerefStrokeStyleToken from '../../../../types/tokens/dereferenced/stroke-style.js'
import getStrokeStyleDashArray from './dash-array.js'

describe('getStrokeStyleDashArray', () => {
  it('returns the string if it\'s a string', () => {
    const token: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: 'solid' }
    expect(getStrokeStyleDashArray(token)).to.equal('solid')
  })

  it('returns dash array if the style is an object', () => {
    const token: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } }
    expect(getStrokeStyleDashArray(token)).to.equal('0.5rem, 0.25rem')
  })
})
