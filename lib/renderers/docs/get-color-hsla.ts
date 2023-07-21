import { colord } from 'colord'
import DerefColorToken from '../../types/tokens/dereferenced/color.js'

const getColorHSLA = (token: DerefColorToken): string => {
  const hsla = colord(token.$value).toHsl()
  return `${hsla.h}º, ${hsla.s}, ${hsla.l}, ${hsla.a}`
}

export default getColorHSLA
