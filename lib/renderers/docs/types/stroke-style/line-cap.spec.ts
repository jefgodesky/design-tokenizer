import { expect } from 'chai'
import DerefStrokeStyleObject from '../../../../types/composite/dereferenced/stroke-style.js'
import getLineCap from './line-cap.js'

describe('getLineCap', () => {
  it('returns the line cap', () => {
    const style: DerefStrokeStyleObject = { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' }
    expect(getLineCap(style)).to.equal('round')
  })
})
