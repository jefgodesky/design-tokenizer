import { expect } from 'chai'
import DerefStrokeStyleObject from '../../../../types/composite/dereferenced/stroke-style.js'
import getDashArray from './dash-array.js'

describe('getDashArray', () => {
  it('returns a string to represent an array of dimensions', () => {
    const style: DerefStrokeStyleObject = { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' }
    expect(getDashArray(style)).to.equal('0.5rem, 0.25rem')
  })
})
