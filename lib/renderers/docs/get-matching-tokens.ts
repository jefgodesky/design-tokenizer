import DerefTokenList from '../../types/deref-token-list.js'

const getMatchingTokens = (list: DerefTokenList, pattern: string): DerefTokenList => {
  const regex = new RegExp(`^${pattern.replaceAll('*', '(.*?)')}$`)
  return Object.entries(list).reduce((acc: DerefTokenList, [key, value]) => {
    if (regex.test(key)) {
      acc[key] = value
    }
    return acc
  }, {})
}

export default getMatchingTokens
