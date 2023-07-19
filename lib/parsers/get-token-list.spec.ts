import { expect } from 'chai'
import getTokenList from './get-token-list.js'

describe('getTokenList', () => {
  const orig = {
    color: {
      green: {
        $type: 'color',
        $value: '#008800'
      }
    },
    font: {
      family: {
        sans: {
          $type: 'fontFamily',
          $value: ['Helvetica', 'sans-serif']
        }
      }
    }
  }

  it('creates a flattened list of tokens', () => {
    const actual = getTokenList(orig)
    expect(JSON.stringify(actual)).to.equal('{"color.green":{"$type":"color","$value":"#008800"},"font.family.sans":{"$type":"fontFamily","$value":["Helvetica","sans-serif"]}}')
  })
})
