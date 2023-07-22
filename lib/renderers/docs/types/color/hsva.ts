import { colord } from 'colord'
import ColorHex from '../../../../types/basic/color-hex.js'

const getHSVA = (color: ColorHex): string => {
  const hsva = colord(color).toHsv()
  return `${hsva.h}°, ${hsva.s}, ${hsva.v}, ${hsva.a}`
}

export default getHSVA
