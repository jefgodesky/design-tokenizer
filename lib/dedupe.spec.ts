import { expect } from 'chai'
import dedupe from './dedupe.js'

describe('dedupe', () => {
  it('dedupes an array', () => {
    const arr = 'aabccc'.split('')
    expect(dedupe(arr).join('')).to.equal('abc')
  })
})
