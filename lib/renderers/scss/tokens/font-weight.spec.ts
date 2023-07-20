import { expect } from 'chai'
import DerefFontWeightToken from '../../../types/tokens/dereferenced/font-weight.js'
import renderFontWeightToken from './font-weight.js'

describe('renderFontWeightToken', () => {
  it('turns a font weight token into a SCSS variable', () => {
    const token: DerefFontWeightToken = { $type: 'fontWeight', $value: 'normal' }
    expect(renderFontWeightToken('base', token)).to.equal('$base: normal;')
  })
})
