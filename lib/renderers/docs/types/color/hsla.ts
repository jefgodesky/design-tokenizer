import { colord } from 'colord'
import ColorHex from '../../../../types/basic/color-hex.js'

const getHSLA = (color: ColorHex): string => {
  const hsla = colord(color).toHsl()
  return `${hsla.h}°, ${hsla.s}, ${hsla.l}, ${hsla.a}`
}

export default getHSLA
