import rfdc from 'rfdc'
import DerefTokenList from './types/deref-token-list.js'

const clone = rfdc()

const getOthers = (list: DerefTokenList, excludePrefixes: string[]): DerefTokenList => {
  const others: DerefTokenList = {}
  for (const key in list) {
    const exclude = excludePrefixes
      .map(prefix => key.startsWith(prefix))
      .reduce((acc: boolean, curr: boolean) => acc || curr, false)
    if (!exclude) others[key] = clone(list[key])
  }
  return others
}

export default getOthers
