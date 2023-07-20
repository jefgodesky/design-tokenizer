import { expect } from 'chai'
import DerefStrokeStyleToken from '../../../types/tokens/dereferenced/stroke-style.js'
import renderStrokeStyleToken from './stroke-style.js'

describe('renderStrokeStyleToken', () => {
  it('renders a stroke style string token as an SCSS variable', () => {
    const token: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: 'solid' }
    expect(renderStrokeStyleToken('solid', token)).to.equal('$solid: solid;')
  })

  it('renders a stroke style object token as a pair of SCSS variables', () => {
    const token: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } }
    expect(renderStrokeStyleToken('solid', token)).to.equal('$solid-dash-array: 0.5rem 0.25rem;\n$solid-line-cap: round;')
  })
})
