import ColorHex, { isColorHex } from '../../../types/basic/color-hex.js'
import ColorSet, { isColorSetType } from './color-set.js'

interface ColorDoc {
  description?: string
  scss: string
  hex: ColorHex
  rgb: ColorSet
  cmyk: ColorSet
  hsl: ColorSet
  hsv: ColorSet
}

const isColorDoc = (obj: any): obj is ColorDoc => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return false
  const { description, scss, hex, rgb, cmyk, hsl, hsv } = obj
  if (description !== undefined && typeof description !== 'string') return false
  if (scss === undefined || typeof scss !== 'string') return false
  if (hex === undefined || !isColorHex(hex)) return false
  const types: { [key: string]: any } = { rgb, cmyk, hsl, hsv }
  return Object.keys(types).reduce((acc: boolean, key: string) => {
    return acc && isColorSetType(types[key], `${key}a`)
  }, true)
}

export default ColorDoc
export { isColorDoc }
