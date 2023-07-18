import { expect } from 'chai'
import allUnreservedProps from './all-unreserved-props.js'

describe('allUnreservedProps', () => {
  it('rejects undefined', () => {
    expect(allUnreservedProps(undefined)).to.equal(false)
  })

  it('rejects null', () => {
    expect(allUnreservedProps(null)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(allUnreservedProps(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(allUnreservedProps(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(allUnreservedProps(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(allUnreservedProps(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(allUnreservedProps('test')).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(allUnreservedProps([])).to.equal(false)
  })

  it('accepts an empty object', () => {
    expect(allUnreservedProps({})).to.equal(true)
  })

  it('accepts most objects', () => {
    expect(allUnreservedProps({ a: 1, b: { c: 2 } })).to.equal(true)
  })

  it('rejects an object with a property that starts with a dollar sign', () => {
    expect(allUnreservedProps({ $value: 1 })).to.equal(false)
  })

  it('rejects an object with a property that includes a left curly brace', () => {
    expect(allUnreservedProps({ 'test{case': 1 })).to.equal(false)
  })

  it('rejects an object with a property that includes a right curly brace', () => {
    expect(allUnreservedProps({ 'test}case': 1 })).to.equal(false)
  })

  it('rejects an object with a property that includes a period', () => {
    expect(allUnreservedProps({ 'test.case': 1 })).to.equal(false)
  })
})
