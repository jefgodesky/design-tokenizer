import { colord, extend } from 'colord'
import cmykPlugin from 'colord/plugins/cmyk'
import DerefColorToken from '../../../types/tokens/dereferenced/color.js'
import ColorDoc from '../types/color.js'
import getName from '../../scss/get-name.js'

extend([cmykPlugin])

const getColorDoc = (name: string, color: DerefColorToken, prefix: { remove?: string, add?: string } = {}): ColorDoc => {
  const { c, m, y, k, a } = colord(color.$value).toCmyk()
  return {
    scss: getName(name, prefix),
    hex: color.$value,
    rgb: colord(color.$value).toRgb(),
    cmyk: { c, m, y, k, a },
    hsl: colord(color.$value).toHsl(),
    hsv: colord(color.$value).toHsv()
  }
}

export default getColorDoc
