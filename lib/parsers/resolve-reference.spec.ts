import { expect } from 'chai'
import resolveReference from './resolve-reference.js'

describe('resolveReferences', () => {
  const tokens = {
    'color.green': { $type: 'color', $value: '#008800' },
    'font.family.sans': { $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] },
    'color.accent': { $type: 'color', $value: '{color.green}' },
    'color.accent2': { $type: 'color', $value: '{color.accent}' },
    'type.heading': { $type: 'typography', $value: { fontFamily: '{font.family.sans}', fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
  }

  it('resolves references', () => {
    expect(resolveReference(tokens, '{color.green}')).to.equal(tokens['color.green'].$value)
  })

  it('resolves nested references', () => {
    expect(resolveReference(tokens, '{color.accent}')).to.equal(tokens['color.green'].$value)
  })
})
