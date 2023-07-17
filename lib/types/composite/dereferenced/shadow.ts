import ColorHex, { isColorHex } from '../../basic/color-hex.js'
import Dimension, { isDimension } from '../../basic/dimension.js'
import Shadow, { isShadow } from '../shadow.js'

interface DerefShadow extends Omit<Shadow, 'color' | 'offsetX' | 'offsetY' | 'blur' | 'spread'> {
  color: ColorHex
  offsetX: Dimension
  offsetY: Dimension
  blur: Dimension
  spread: Dimension
}

const isDerefShadow = (obj: any): obj is DerefShadow => {
  if (!isShadow(obj)) return false
  const { color, offsetX, offsetY, blur, spread } = obj
  const dimensions = [offsetX, offsetY, blur, spread]
  return isColorHex(color) && dimensions.reduce((acc: boolean, curr: any) => acc && isDimension(curr), true)
}

export default DerefShadow
export { isDerefShadow }
