import DerefTokenList from '../../types/deref-token-list.js'
import { isDerefColorToken } from '../../types/tokens/dereferenced/color.js'
import getSwatch from './swatch.js'

const getSwatches = (list: DerefTokenList, prefix: string = ''): string => {
  const swatches = []
  for (const key in list) {
    const token = list[key]
    if (token.$type === 'color' && isDerefColorToken(token) && key.startsWith(prefix)) {
      swatches.push(getSwatch(key, token))
    }
  }
  return `<section class="swatches" id="swatches">${swatches.join('')}</section>`
}

export default getSwatches
