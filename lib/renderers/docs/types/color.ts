import ColorHex, { isColorHex } from '../../../types/basic/color-hex.js'

interface ColorDoc {
  description?: string
  scss: string
  hex: ColorHex
  rgb: string
  cmyk: string
  hsl: string
  hsv: string
}

const isColorDoc = (obj: any): obj is ColorDoc => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return false
  const { description, scss, hex } = obj
  if (description !== undefined && typeof description !== 'string') return false
  if (scss === undefined || typeof scss !== 'string') return false
  if (hex === undefined || !isColorHex(hex)) return false

  const regex: { [key: string]: RegExp } = {
    rgb: /\d?\d?\d, \d?\d?\d, \d?\d?\d/,
    cmyk: /\d?\d?\d, \d?\d?\d, \d?\d?\d, \d?\d?\d/,
    hsl: /\d?\d?\dº, \d?\d?\d, \d?\d/,
    hsv: /\d?\d?\dº, \d?\d?\d, \d?\d/
  }
  return Object.keys(regex).reduce((acc: boolean, key: string) => {
    return acc && obj[key] !== undefined && regex[key].test(obj[key])
  }, true)
}

export default ColorDoc
export { isColorDoc }
