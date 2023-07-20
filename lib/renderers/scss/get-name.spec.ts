import { expect } from 'chai'
import getName from './get-name.js'

describe('getName', () => {
  it('returns the given name', () => {
    expect(getName('green')).to.equal('green')
  })

  it('turns dots into dashes', () => {
    expect(getName('color.green')).to.equal('color-green')
  })

  it('slugifies the name', () => {
    expect(getName('The Color Green')).to.equal('the-color-green')
  })

  it('can remove a prefix', () => {
    expect(getName('color.primary.green', { remove: 'color.primary' })).to.equal('green')
  })

  it('can add a prefix', () => {
    expect(getName('color.primary.green', { add: 'test.case' })).to.equal('test-case-color-primary-green')
  })

  it('can remove one prefix and add another', () => {
    expect(getName('color.primary.green', { add: 'test.case', remove: 'color.primary' })).to.equal('test-case-green')
  })
})
