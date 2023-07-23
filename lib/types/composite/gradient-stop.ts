import ColorHex, { isColorHex } from '../basic/color-hex.js'
import Reference, { isReference } from '../basic/reference.js'
import isObject from '../guards/object.js'

interface GradientStop {
  color: ColorHex | Reference
  position: number | Reference
}

const isGradientStop = (obj: any): obj is GradientStop => {
  if (!isObject(obj)) return false
  const { color, position } = obj
  if (color === undefined || !(isColorHex(color) || isReference(color))) return false
  if (position === undefined || !(typeof position === 'number' || isReference(position))) return false
  return true
}

export default GradientStop
export { isGradientStop }
