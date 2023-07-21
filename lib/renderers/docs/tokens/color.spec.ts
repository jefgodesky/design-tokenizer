import { expect } from 'chai'
import DerefColorToken from '../../../types/tokens/dereferenced/color.js'
import getColorDoc from './color.js'

describe('getColorDoc', () => {
  const token: DerefColorToken = { $type: 'color', $value: '#008800' }

  it('gets the SCSS variable name', () => {
    expect(getColorDoc('color.primary.green', token).scss).to.equal('color-primary-green')
  })

  it('includes the description, if there is one', () => {
    const t = { $description: 'Green', ...token }
    expect(getColorDoc('color.primary.green', t).description).to.equal('Green')
  })

  it('can add or remove prefixes from the SCSS variable name', () => {
    const prefix = { add: 'test.case', remove: 'color.primary' }
    expect(getColorDoc('color.primary.green', token, prefix).scss).to.equal('test-case-green')
  })

  it('gets the hexadecimal value', () => {
    expect(getColorDoc('color.primary.green', token).hex).to.equal('#008800')
  })

  it('gets the RGB value', () => {
    const doc = getColorDoc('color.primary.green', token)
    expect(doc.rgb).to.equal('0, 136, 0')
  })

  it('gets the CMYK value', () => {
    const doc = getColorDoc('color.primary.green', token)
    expect(doc.cmyk).to.equal('100, 0, 100, 47')
  })

  it('gets the HSL value', () => {
    const doc = getColorDoc('color.primary.green', token)
    expect(doc.hsl).to.equal('120º, 100, 27')
  })

  it('gets the HSV value', () => {
    const doc = getColorDoc('color.primary.green', token)
    expect(doc.hsv).to.equal('120º, 100, 53')
  })
})
