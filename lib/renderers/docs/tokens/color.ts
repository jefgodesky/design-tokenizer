import { colord, extend } from 'colord'
import cmykPlugin from 'colord/plugins/cmyk'
import DerefColorToken from '../../../types/tokens/dereferenced/color.js'
import ColorDoc from '../types/color.js'
import getName from '../../scss/get-name.js'

extend([cmykPlugin])

const getColorDoc = (name: string, color: DerefColorToken, prefix: { remove?: string, add?: string } = {}): ColorDoc => {
  const rgb = colord(color.$value).toRgb()
  const cmyk = colord(color.$value).toCmyk()
  const hsl = colord(color.$value).toHsl()
  const hsv = colord(color.$value).toHsv()

  return {
    description: color.$description,
    scss: getName(name, prefix),
    hex: color.$value,
    rgb: `${rgb.r}, ${rgb.g}, ${rgb.b}`,
    cmyk: `${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k}`,
    hsl: `${hsl.h}º, ${hsl.s}, ${hsl.l}`,
    hsv: `${hsv.h}º, ${hsv.s}, ${hsv.v}`
  }
}

export default getColorDoc
