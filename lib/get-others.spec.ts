import { expect } from 'chai'
import DerefTokenList from './types/deref-token-list.js'
import getOthers from './get-others.js'

describe('getOthers', () => {
  it('returns a list of tokens not specified by list', () => {
    const list: DerefTokenList = {
      'color.primary.green': { $type: 'color', $value: '#008800' },
      'breakpoint.primary': { $type: 'dimension', $value: '40rem' },
      'number.magic.nil': { $type: 'number', $value: 0 }
    }
    const actual = getOthers(list, ['color.primary', 'breakpoint'])
    expect(JSON.stringify(actual)).to.equal('{"number.magic.nil":{"$type":"number","$value":0}}')
  })
})
