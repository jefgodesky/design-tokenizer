import { expect } from 'chai'
import getValue from './get-value.js'

describe('getValue', () => {
  it('returns the $value for a path from a value dictionary', () => {
    const dict = { 'color.green': { $type: 'color', $value: '#008800' } }
    expect(getValue(dict, 'color.green')).to.equal(dict['color.green'].$value)
  })

  it('returns undefined if there is no $value', () => {
    const dict = { 'color.green': { $type: 'color' } }
    expect(getValue(dict, 'color.green')).to.equal(undefined)
  })

  it('returns undefined if key does not exist', () => {
    expect(getValue({}, 'color.green')).to.equal(undefined)
  })
})
