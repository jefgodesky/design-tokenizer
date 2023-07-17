import { expect } from 'chai'
import getValueDictionary from './get-value-dictionary.js'

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
    const actual = getValueDictionary(set)
    expect(JSON.stringify(actual)).to.equal('{"color.green":{"$type":"color","$value":"#008800"},"font.family.basic":{"$type":"fontFamily","$value":["Helvetica","sans-serif"]}}')
  })
})
