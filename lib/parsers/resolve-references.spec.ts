import { expect } from 'chai'
import resolveReferences from './resolve-references.js'

describe('resolveReferences', () => {
  it('resolves references in a flat value dictionary', () => {
    const values = {
      'color.green': { $type: 'color', $value: '#008800' },
      'font.family.basic': { $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] },
      'color.accent': '{color.green}',
      'font.heading': '{font.family.basic}'
    }
    const actual = resolveReferences(values)
    expect(actual['color.accent'].$value).to.equal(values['color.green'].$value)
    expect(actual['font.heading'].$value).to.eql(values['font.family.basic'].$value)
  })
})
