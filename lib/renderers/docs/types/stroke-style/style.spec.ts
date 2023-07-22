import { expect } from 'chai'
import DerefStrokeStyleObject from '../../../../types/composite/dereferenced/stroke-style.js'
import getStyle from './style.js'

describe('getStyle', () => {
  it('returns the string if given a string', () => {
    expect(getStyle('solid')).to.equal('solid')
  })

  it('returns dashed if style is an object', () => {
    const style: DerefStrokeStyleObject = { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' }
    expect(getStyle(style)).to.equal('dashed')
  })
})
