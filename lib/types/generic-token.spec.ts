import { expect } from 'chai'
import { isGenericToken } from './generic-token.js'

describe('isGenericToken', () => {
  it('rejects undefined', () => {
    expect(isGenericToken(undefined)).to.equal(false)
  })

  it('rejects null', () => {
    expect(isGenericToken(null)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isGenericToken(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isGenericToken(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isGenericToken(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isGenericToken(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isGenericToken('test')).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isGenericToken([])).to.equal(false)
  })

  it('rejects an empty object', () => {
    expect(isGenericToken({})).to.equal(false)
  })

  it('rejects an object with $type but no $value', () => {
    expect(isGenericToken({ $type: 'Test' })).to.equal(false)
  })

  it('rejects an object with $value but no $type', () => {
    expect(isGenericToken({ $value: 1 })).to.equal(false)
  })

  it('accepts an object with a $type and a $value', () => {
    expect(isGenericToken({ $type: 'Test', $value: 1 })).to.equal(true)
  })

  it('rejects an object with an undefined $type', () => {
    expect(isGenericToken({ $type: undefined, $value: 1 })).to.equal(false)
  })

  it('rejects an object with a null $type', () => {
    expect(isGenericToken({ $type: null, $value: 1 })).to.equal(false)
  })

  it('rejects an object with a funciton for $type', () => {
    expect(isGenericToken({ $type: () => {}, $value: 1 })).to.equal(false)
  })

  it('rejects an object with a numerical $type', () => {
    expect(isGenericToken({ $type: 1, $value: 1 })).to.equal(false)
  })

  it('rejects an object with an array for $type', () => {
    expect(isGenericToken({ $type: ['T', 'e', 's', 't'], $value: 1 })).to.equal(false)
  })

  it('rejects an object with an object for $type', () => {
    expect(isGenericToken({ $type: { val: 'Test' }, $value: 1 })).to.equal(false)
  })

  it('rejects an object with an undefined $value', () => {
    expect(isGenericToken({ $type: 'Test', $value: undefined })).to.equal(false)
  })

  it('rejects an object with a null $value', () => {
    expect(isGenericToken({ $type: 'Test', $value: null })).to.equal(false)
  })

  it('rejects an object with a function for $value', () => {
    expect(isGenericToken({ $type: 'Test', $value: () => {} })).to.equal(false)
  })

  it('accepts an object with true for $value', () => {
    expect(isGenericToken({ $type: 'Test', $value: true })).to.equal(true)
  })

  it('accepts an object with false for $value', () => {
    expect(isGenericToken({ $type: 'Test', $value: false })).to.equal(true)
  })

  it('accepts an object with a numerical $value', () => {
    expect(isGenericToken({ $type: 'Test', $value: 1 })).to.equal(true)
  })

  it('accepts an object with a string $value', () => {
    expect(isGenericToken({ $type: 'Test', $value: 'Test' })).to.equal(true)
  })

  it('accepts an object with an array for $value', () => {
    expect(isGenericToken({ $type: 'Test', $value: [] })).to.equal(true)
  })

  it('accepts an object with an object for $value', () => {
    expect(isGenericToken({ $type: 'Test', $value: {} })).to.equal(true)
  })

  it('accepts an object with an undefined $description', () => {
    expect(isGenericToken({ $description: undefined, $type: 'Test', $value: 1 })).to.equal(true)
  })

  it('rejects an object with a null $description', () => {
    expect(isGenericToken({ $description: null, $type: 'Test', $value: 1 })).to.equal(false)
  })

  it('rejects an object with a function for $description', () => {
    expect(isGenericToken({ $description: () => {}, $type: 'Test', $value: 1 })).to.equal(false)
  })

  it('rejects an object with true for $description', () => {
    expect(isGenericToken({ $description: true, $type: 'Test', $value: 1 })).to.equal(false)
  })

  it('rejects an object with false for $description', () => {
    expect(isGenericToken({ $description: false, $type: 'Test', $value: 1 })).to.equal(false)
  })

  it('rejects an object with a numerical $description', () => {
    expect(isGenericToken({ $description: 1, $type: 'Test', $value: 1 })).to.equal(false)
  })

  it('accepts an object with a string $description', () => {
    expect(isGenericToken({ $description: 'Test', $type: 'Test', $value: 1 })).to.equal(true)
  })

  it('rejects an object with an array for $description', () => {
    expect(isGenericToken({ $description: [], $type: 'Test', $value: 1 })).to.equal(false)
  })

  it('rejects an object with an object for $description', () => {
    expect(isGenericToken({ $description: {}, $type: 'Test', $value: 1 })).to.equal(false)
  })

  it('accepts an object with undefined $extensions', () => {
    expect(isGenericToken({ $type: 'Test', $value: 1, $extensions: undefined })).to.equal(true)
  })

  it('rejects an object with null for $extensions', () => {
    expect(isGenericToken({ $type: 'Test', $value: 1, $extensions: null })).to.equal(false)
  })

  it('rejects an object with a function for $extensions', () => {
    expect(isGenericToken({ $type: 'Test', $value: 1, $extensions: () => {} })).to.equal(false)
  })

  it('rejects an object with true for $extensions', () => {
    expect(isGenericToken({ $type: 'Test', $value: 1, $extensions: true })).to.equal(false)
  })

  it('rejects an object with false for $extensions', () => {
    expect(isGenericToken({ $type: 'Test', $value: 1, $extensions: false })).to.equal(false)
  })

  it('rejects an object with a number for $extensions', () => {
    expect(isGenericToken({ $type: 'Test', $value: 1, $extensions: 1 })).to.equal(false)
  })

  it('rejects an object with a string for $extensions', () => {
    expect(isGenericToken({ $type: 'Test', $value: 1, $extensions: 'nope' })).to.equal(false)
  })

  it('rejects an object with an array for $extensions', () => {
    expect(isGenericToken({ $type: 'Test', $value: 1, $extensions: [] })).to.equal(false)
  })

  it('accept an object with an empty array for $extensions', () => {
    expect(isGenericToken({ $type: 'Test', $value: 1, $extensions: {} })).to.equal(true)
  })

  it('accepts an object with an object with unreserved keys for $extensions', () => {
    expect(isGenericToken({ $type: 'Test', $value: 1, $extensions: { a: 1, b: { c: 2 } } })).to.equal(true)
  })

  it('accepts an object with additional properties', () => {
    expect(isGenericToken({ $type: 'Test', $value: 1, other: true })).to.equal(true)
  })

  it('rejects an object with additional properties with reserved names', () => {
    expect(isGenericToken({ $type: 'Test', $value: 1, $other: true })).to.equal(false)
  })
})
