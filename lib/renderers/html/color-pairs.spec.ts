import { expect } from 'chai'
import DerefTokenList from '../../types/deref-token-list.js'
import getColorPairs from './color-pairs.js'

describe('getColorPairs', () => {
  it('returns each unique pair of color tokens in the list', () => {
    const list: DerefTokenList = {
      'color.black': { $type: 'color', $value: '#000000' },
      'color.white': { $type: 'color', $value: '#ffffff' },
      'color.green': { $type: 'color', $value: '#008800' },
      'color.blue': { $type: 'color', $value: '#000088' },
      'spacing.vertical': { $type: 'dimension', $value: '1rem' }
    }
    const pairs = getColorPairs(list)
    const expected = '[[{"$type":"color","$value":"#000000","$description":"color.black"},{"$type":"color","$value":"#ffffff","$description":"color.white"}],[{"$type":"color","$value":"#000000","$description":"color.black"},{"$type":"color","$value":"#008800","$description":"color.green"}],[{"$type":"color","$value":"#000000","$description":"color.black"},{"$type":"color","$value":"#000088","$description":"color.blue"}],[{"$type":"color","$value":"#ffffff","$description":"color.white"},{"$type":"color","$value":"#008800","$description":"color.green"}],[{"$type":"color","$value":"#ffffff","$description":"color.white"},{"$type":"color","$value":"#000088","$description":"color.blue"}],[{"$type":"color","$value":"#008800","$description":"color.green"},{"$type":"color","$value":"#000088","$description":"color.blue"}]]'
    expect(JSON.stringify(pairs)).to.equal(expected)
  })
})
