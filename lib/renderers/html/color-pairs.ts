import DerefTokenList from '../../types/deref-token-list.js'
import DerefColorToken, { isDerefColorToken } from '../../types/tokens/dereferenced/color.js'

const getColorPairs = (list: DerefTokenList): DerefColorToken[][] => {
  const found: string[] = []
  const pairs: DerefColorToken[][] = []
  for (const a in list) {
    const tokenA = list[a]
    if (tokenA.$type !== 'color' || !isDerefColorToken(tokenA)) continue
    for (const b in list) {
      const tokenB = list[b]
      if (a === b || tokenB.$type !== 'color' || !isDerefColorToken(tokenB) || found.includes(`${a}/${b}`)) continue
      found.push(`${a}/${b}`, `${b}/${a}`)
      pairs.push([tokenA, tokenB])
    }
  }
  return pairs
}

export default getColorPairs
