import { expect } from 'chai'
import DerefStrokeStyleToken from '../../../../types/tokens/dereferenced/stroke-style.js'
import getStrokeStyle from './style.js'

describe('getStrokeStyle', () => {
  it('returns the style if it\'s a string', () => {
    const token: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: 'solid' }
    expect(getStrokeStyle(token)).to.equal('solid')
  })

  it('returns dashed if the style is an object', () => {
    const token: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } }
    expect(getStrokeStyle(token)).to.equal('dashed')
  })
})
