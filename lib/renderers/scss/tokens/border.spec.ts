import { expect } from 'chai'
import DerefBorderToken from '../../../types/tokens/dereferenced/border.js'
import renderBorderToken from './border.js'

describe('renderBorderToken', () => {
  it('renders a border token as an SCSS variable', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#008800', width: '1px', style: 'solid' } }
    expect(renderBorderToken('basic', token)).to.equal('$basic: 1px solid #008800;')
  })

  it('renders a border token with a stroke style object as a set of SCSS variables', () => {
    const token: DerefBorderToken = { $type: 'border', $value: { color: '#008800', width: '1px', style: { dashArray: ['0.5rem', '0.25rem'], lineCap: 'round' } } }
    expect(renderBorderToken('custom', token)).to.equal('$custom: 1px dashed #008800;\n$custom-dash-array: 0.5rem 0.25rem;\n$custom-line-cap: round;')
  })
})
