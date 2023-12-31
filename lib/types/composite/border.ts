import ColorHex, { isColorHex } from '../basic/color-hex.js'
import Dimension, { isDimension } from '../basic/dimension.js'
import Reference, { isReference } from '../basic/reference.js'
import StrokeStyleObject, { isStrokeStyleObject } from './stroke-style.js'
import StrokeStyleString, { isStrokeStyleString } from '../basic/stroke-style.js'
import isObject from '../guards/object.js'

interface Border {
  color: ColorHex | Reference
  width: Dimension | Reference
  style: StrokeStyleString | StrokeStyleObject | Reference
}

const isBorder = (obj: any): obj is Border => {
  if (!isObject(obj)) return false
  const { color, width, style } = obj
  if (color === undefined || !(isColorHex(color) || isReference(color))) return false
  if (width === undefined || !(isDimension(width) || isReference(width))) return false
  if (style === undefined || !(isStrokeStyleString(style) || isStrokeStyleObject(style) || isReference(style))) return false
  return true
}

export default Border
export { isBorder }
