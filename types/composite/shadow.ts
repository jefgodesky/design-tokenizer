import ColorHex, { isColorHex } from '../basic/color-hex.js'
import Dictionary, { isDictionary } from '../dictionary.js'
import Dimension, { isDimension } from '../basic/dimension.js'
import Reference, { isReference } from '../basic/reference.js'

interface Shadow extends Dictionary {
  color: ColorHex | Reference
  offsetX: Dimension | Reference
  offsetY: Dimension | Reference
  blur: Dimension | Reference
  spread: Dimension | Reference
}

const isShadow = (obj: any): obj is Shadow => {
  if (!isDictionary(obj)) return false
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
