import { expect } from 'chai'
import DerefGradientToken from '../types/tokens/dereferenced/gradient.js'
import DerefTypographyToken from '../types/tokens/dereferenced/typography.js'
import resolveReferences from './resolve-references.js'

describe('resolveReferences', () => {
  const tokens = {
    'color.green': { $type: 'color', $value: '#008800' },
    'font.family.sans': { $type: 'fontFamily', $value: ['Helvetica', 'sans-serif'] },
    'color.accent': { $type: 'color', $value: '{color.green}' },
    'color.accent2': { $type: 'color', $value: '{color.accent}' },
    'type.heading': { $type: 'typography', $value: { fontFamily: '{font.family.sans}', fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } },
    'gradient.test': { $type: 'gradient', $value: [{ color: '{color.green}', position: 0 }, { color: '#ffffff', position: 1 }] }
  }

  it('resolves references in a flat token dictionary', () => {
    const actual = resolveReferences(tokens)
    expect(actual['color.accent'].$value).to.equal(tokens['color.green'].$value)
    expect(actual['color.accent2'].$value).to.equal(tokens['color.green'].$value)
    expect((actual['type.heading'] as DerefTypographyToken).$value.fontFamily[0]).to.equal(tokens['font.family.sans'].$value[0])
    expect((actual['gradient.test'] as DerefGradientToken).$value[0].color).to.equal(tokens['color.green'].$value)
  })
})
