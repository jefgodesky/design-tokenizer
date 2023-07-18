import ColorHex, { isColorHex } from '../basic/color-hex.js'
import Dimension, { isDimension } from '../basic/dimension.js'
import Reference, { isReference } from '../basic/reference.js'

interface Shadow {
  color: ColorHex | Reference
  offsetX: Dimension | Reference
  offsetY: Dimension | Reference
  blur: Dimension | Reference
  spread: Dimension | Reference
}

const isShadow = (obj: any): obj is Shadow => {
  if (obj === null || typeof obj !== 'object') return false
  const { color, offsetX, offsetY, blur, spread } = obj
  if (color === undefined || !(isColorHex(color) || isReference(color))) return false
  if (offsetX === undefined || !(isDimension(offsetX) || isReference(offsetX))) return false
  if (offsetY === undefined || !(isDimension(offsetY) || isReference(offsetY))) return false
  if (blur === undefined || !(isDimension(blur) || isReference(blur))) return false
  if (spread === undefined || !(isDimension(spread) || isReference(spread))) return false
  return true
}

export default Shadow
export { isShadow }
