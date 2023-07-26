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
    expect(JSON.stringify(checks)).to.equal('[{"a":{"$type":"color","$value":"#000000","$description":"color.black"},"b":{"$type":"color","$value":"#ffffff","$description":"color.white"},"normal":{"aa":true,"aaa":true},"large":{"aa":true,"aaa":true}}]')
  })

  it('preserves existing descriptions', () => {
    const list: DerefTokenList = {
      'color.black': { $type: 'color', $value: '#000000', $description: 'Black' },
      'color.white': { $type: 'color', $value: '#ffffff', $description: 'White' }
    }
    const checks = getContrastChecks(list)
    expect(JSON.stringify(checks)).to.equal('[{"a":{"$type":"color","$value":"#000000","$description":"Black"},"b":{"$type":"color","$value":"#ffffff","$description":"White"},"normal":{"aa":true,"aaa":true},"large":{"aa":true,"aaa":true}}]')
  })
})
