import { expect } from 'chai'
import DerefTypographyToken from '../../../types/tokens/dereferenced/typography.js'
import renderTypographyToken from './typography.js'

describe('renderTypographyToken', () => {
  it('renders a typography token as a pair of SCSS variable', () => {
    const token: DerefTypographyToken = { $type: 'typography', $value: { fontFamily: ['Helvetica', 'sans-serif'], fontSize: '1rem', fontWeight: 'normal', letterSpacing: '0rem', lineHeight: 1.2 } }
    expect(renderTypographyToken('body', token)).to.equal('$body: normal 1rem/1.2rem "Helvetica", sans-serif;\n$body-letter-spacing: 0rem;')
  })
})
