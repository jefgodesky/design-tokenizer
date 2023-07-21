import { colord } from 'colord'
import DerefColorToken from '../../types/tokens/dereferenced/color.js'

const getColorRGBA = (token: DerefColorToken): string => {
  const rgba = colord(token.$value).toRgb()
  return `${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a}`
}

export default getColorRGBA
