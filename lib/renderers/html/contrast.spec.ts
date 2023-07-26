import { expect } from 'chai'
import DerefTokenList from '../../types/deref-token-list.js'
import getContrastChecks from './contrast.js'

describe('getContrastChecks', () => {
  it('generates an array of contrast checks', () => {
    const list: DerefTokenList = {
      'color.black': { $type: 'color', $value: '#000000' },
      'color.white': { $type: 'color', $value: '#ffffff' }
    }
    const checks = getContrastChecks(list)
    expect(JSON.stringify(checks)).to.equal('[{"a":{"$type":"color","$value":"#000000"},"b":{"$type":"color","$value":"#ffffff"},"normal":{"aa":true,"aaa":true},"large":{"aa":true,"aaa":true}}]')
  })
})
