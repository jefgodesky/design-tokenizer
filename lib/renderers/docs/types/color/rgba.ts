import { colord } from 'colord'
import ColorHex from '../../../../types/basic/color-hex.js'

const getRGBA = (color: ColorHex): string => {
  const rgba = colord(color).toRgb()
  return `${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a}`
}

export default getRGBA
