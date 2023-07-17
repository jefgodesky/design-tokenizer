import { expect } from 'chai'
import { isDerefBorder } from '../types/composite/dereferenced/border.js'
import resolveReferences from './resolve-references.js'

describe('resolveReferences', () => {
  it('resolves references in a flat value dictionary', () => {
    const values = {
      'color.green': { $type: 'color', $value: '#008800' },
      'font.family.basic': { $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] },
      'color.accent': { $type: 'color', $value: '{color.green}' },
      'font.heading': { $type: 'fontFamily', $value: '{font.family.basic}' }
    }
    const actual = resolveReferences(values)
    expect(actual['color.accent'].$value).to.equal(values['color.green'].$value)
    expect(actual['font.heading'].$value).to.eql(values['font.family.basic'].$value)
  })

  it('resolves references in composite values', () => {
    const values = {
      'color.green': { $type: 'color', $value: '#008800' },
      'border.basic': { $type: 'border', $value: { color: '{color.green}', width: '1px', style: 'solid' } }
    }
    const resolved = resolveReferences(values)
    const { $value } = resolved['border.basic']
    const actual = isDerefBorder($value) ? $value.color : false
    expect(actual).to.equal('#008800')
  })
})
