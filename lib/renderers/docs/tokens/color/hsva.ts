import { colord } from 'colord'
import DerefColorToken from '../../../../types/tokens/dereferenced/color.js'

const getColorHSVA = (token: DerefColorToken): string => {
  const hsva = colord(token.$value).toHsv()
  return `${hsva.h}º, ${hsva.s}, ${hsva.v}, ${hsva.a}`
}

export default getColorHSVA
