import Border, { isBorder } from '../border.js'
import ColorHex, { isColorHex } from '../../basic/color-hex.js'
import Dimension, { isDimension } from '../../basic/dimension.js'
import StrokeStyleString, { isStrokeStyleString } from '../../basic/stroke-style.js'
import DerefStrokeStyleObject, { isDerefStrokeStyleObject } from './stroke-style.js'

interface DerefBorder extends Omit<Border, 'color' | 'width' | 'style'> {
  color: ColorHex
  width: Dimension
  style: StrokeStyleString | DerefStrokeStyleObject
}

const isDerefBorder = (obj: any): obj is DerefBorder => {
  if (!isBorder(obj)) return false
  const { color, width, style } = obj
  return isColorHex(color) && isDimension(width) && (isStrokeStyleString(style) || isDerefStrokeStyleObject(style))
}

export default DerefBorder
export { isDerefBorder }
