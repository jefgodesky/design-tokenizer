import { expect } from 'chai'
import Dictionary from '../types/dictionary.js'
import resolveReferences from './resolve-references.js'

describe('resolveReferences', () => {
  it('resolves references in a flat value dictionary', () => {
    const values: Dictionary = {
      'color.green': '#008800',
      'font.family.basic': ['Helvetica', 'sans-serif'],
      'color.accent': '{color.green}',
      'font.heading': '{font.family.basic}'
    }
    const actual = resolveReferences(values)
    expect(actual['color.accent']).to.equal(values['color.green'])
    expect(actual['font.heading']).to.eql(values['font.family.basic'])
  })
})
