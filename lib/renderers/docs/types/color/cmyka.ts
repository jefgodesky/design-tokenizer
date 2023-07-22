import { colord, extend } from 'colord'
import cmykPlugin from 'colord/plugins/cmyk'
import ColorHex from '../../../../types/basic/color-hex.js'

extend([cmykPlugin])

const getCMYKA = (color: ColorHex): string => {
  const cmyka = colord(color).toCmyk()
  return `${cmyka.c}, ${cmyka.m}, ${cmyka.y}, ${cmyka.k}, ${cmyka.a}`
}

export default getCMYKA
