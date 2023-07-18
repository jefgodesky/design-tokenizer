import ColorHex, { isColorHex } from '../basic/color-hex.js'
import Reference, { isReference } from '../basic/reference.js'

interface GradientStop {
  color: ColorHex | Reference
  position: number | Reference
}

const isGradientStop = (obj: any): obj is GradientStop => {
  if (obj === null || typeof obj !== 'object') return false
  const { color, position } = obj
  if (color === undefined || !(isColorHex(color) || isReference(color))) return false
  if (position === undefined || !(typeof position === 'number' || isReference(position))) return false
  return true
}

export default GradientStop
export { isGradientStop }
