import rfdc from 'rfdc'
import DerefTokenList from '../../types/deref-token-list.js'
import DerefColorToken, { isDerefColorToken } from '../../types/tokens/dereferenced/color.js'

const clone = rfdc()

const getColorPairs = (list: DerefTokenList): DerefColorToken[][] => {
  const found: string[] = []
  const pairs: DerefColorToken[][] = []
  for (const a in list) {
    const tokenA = clone(list[a])
    if (tokenA.$type !== 'color' || !isDerefColorToken(tokenA)) continue
    for (const b in list) {
      const tokenB = clone(list[b])
      if (a === b || tokenB.$type !== 'color' || !isDerefColorToken(tokenB) || found.includes(`${a}/${b}`)) continue
      found.push(`${a}/${b}`, `${b}/${a}`)
      pairs.push([tokenA, tokenB])
      tokenA.$description = tokenA.$description ?? a
      tokenB.$description = tokenB.$description ?? b
    }
  }
  return pairs
}

export default getColorPairs
