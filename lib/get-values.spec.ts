import { expect } from 'chai'
import getValues from './get-values.js'

describe('getValues', () => {
  it('creates a flattened dictionary of values', () => {
    const set = {
      color: {
        green: {
          $type: 'color',
          $value: '#008800'
        }
      },
      font: {
        family: {
          basic: {
            $type: 'fontFamily',
            $value: ['Helvetica', 'sans-serif']
          }
        }
      }
    }
    const actual = getValues(set)
    expect(JSON.stringify(actual)).to.equal('{"color.green":"#008800","font.family.basic":["Helvetica","sans-serif"]}')
  })
})
