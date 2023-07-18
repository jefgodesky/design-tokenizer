import { expect } from 'chai'
import isUnreservedName from './unreserved-name.js'

describe('isUnreservedName', () => {
  it('rejects undefined', () => {
    expect(isUnreservedName(undefined)).to.equal(false)
  })

  it('rejects null', () => {
    expect(isUnreservedName(null)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isUnreservedName(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isUnreservedName(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isUnreservedName(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isUnreservedName(1)).to.equal(false)
  })

  it('accepts most strings', () => {
    expect(isUnreservedName('name')).to.equal(true)
  })

  it('accepts most strings with spaces', () => {
    expect(isUnreservedName('group name')).to.equal(true)
  })

  it('rejects strings that begin with a dollar sign', () => {
    expect(isUnreservedName('$test')).to.equal(false)
  })

  it('accepts strings that include a dollar sign later', () => {
    expect(isUnreservedName('te$t')).to.equal(true)
  })

  it('rejects strings that include a left curly bracket', () => {
    expect(isUnreservedName('{test')).to.equal(false)
  })

  it('rejects strings that include a right curly bracket', () => {
    expect(isUnreservedName('test}')).to.equal(false)
  })

  it('rejects strings that include a period', () => {
    expect(isUnreservedName('test.case')).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isUnreservedName([])).to.equal(false)
  })

  it('rejects objects', () => {
    expect(isUnreservedName({})).to.equal(false)
  })
})
