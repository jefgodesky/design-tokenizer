import { expect } from 'chai'
import DerefColorToken from '../../../types/tokens/dereferenced/color.js'
import renderColorToken from './color.js'

describe('renderColorToken', () => {
  it('turns a color token into a SCSS variable', () => {
    const token: DerefColorToken = { $type: 'color', $value: '#008800' }
    expect(renderColorToken('pass', token)).to.equal('$pass: #008800;')
  })
})
