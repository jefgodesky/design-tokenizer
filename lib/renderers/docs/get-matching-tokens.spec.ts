import { expect } from 'chai'
import DerefTokenList from '../../types/deref-token-list.js'
import getMatchingTokens from './get-matching-tokens.js'

describe('getMatchingTokens', () => {
  it('returns the tokens that match the pattern', () => {
    const list: DerefTokenList = {
      'color.black': { $type: 'color', $value: '#000000' },
      'color.white': { $type: 'color', $value: '#ffffff' },
      'spacing.vertical': { $type: 'dimension', $value: '1rem' }
    }
    const actual = getMatchingTokens(list, 'color.*')
    expect(Object.keys(actual).join(' ')).to.equal('color.black color.white')
  })
})
