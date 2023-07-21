import { colord, extend } from 'colord'
import cmykPlugin from 'colord/plugins/cmyk'
import DerefColorToken from '../../types/tokens/dereferenced/color.js'

extend([cmykPlugin])

const getColorCMYKA = (token: DerefColorToken): string => {
  const cmyka = colord(token.$value).toCmyk()
  return `${cmyka.c}, ${cmyka.m}, ${cmyka.y}, ${cmyka.k}, ${cmyka.a}`
}

export default getColorCMYKA
