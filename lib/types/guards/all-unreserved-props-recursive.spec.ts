import { expect } from 'chai'
import allUnreservedPropsRecursive from './all-unreserved-props-recursive.js'

describe('allUnreservedPropsRecursive', () => {
  it('rejects undefined', () => {
    expect(allUnreservedPropsRecursive(undefined)).to.equal(false)
  })

  it('rejects null', () => {
    expect(allUnreservedPropsRecursive(null)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(allUnreservedPropsRecursive(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(allUnreservedPropsRecursive(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(allUnreservedPropsRecursive(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(allUnreservedPropsRecursive(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(allUnreservedPropsRecursive('test')).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(allUnreservedPropsRecursive([])).to.equal(false)
  })

  it('accepts an empty object', () => {
    expect(allUnreservedPropsRecursive({})).to.equal(true)
  })

  it('accepts most objects', () => {
    expect(allUnreservedPropsRecursive({ a: 1, b: { c: 2 } })).to.equal(true)
  })

  it('rejects an object with a property that starts with a dollar sign', () => {
    expect(allUnreservedPropsRecursive({ $value: 1 })).to.equal(false)
  })

  it('rejects an object with a nested property that starts with a dollar sign', () => {
    expect(allUnreservedPropsRecursive({ a: { $value: 1 } })).to.equal(false)
  })

  it('rejects an object with a nested property that includes a left curly brace', () => {
    expect(allUnreservedPropsRecursive({ a: { 'test{case': 1 } })).to.equal(false)
  })

  it('rejects an object with a property that includes a right curly brace', () => {
    expect(allUnreservedPropsRecursive({ 'test}case': 1 })).to.equal(false)
  })

  it('rejects an object with a nested property that includes a right curly brace', () => {
    expect(allUnreservedPropsRecursive({ a: { 'test}case': 1 } })).to.equal(false)
  })

  it('rejects an object with a property that includes a period', () => {
    expect(allUnreservedPropsRecursive({ 'test.case': 1 })).to.equal(false)
  })

  it('rejects an object with a nested property that includes a period', () => {
    expect(allUnreservedPropsRecursive({ a: { 'test.case': 1 } })).to.equal(false)
  })
})
