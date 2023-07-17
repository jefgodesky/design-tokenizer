import GradientStop, { isGradientStop } from '../gradient-stop.js'
import ColorHex, { isColorHex } from '../../basic/color-hex.js'

interface DerefGradientStop extends Omit<GradientStop, 'color' | 'position'> {
  color: ColorHex
  position: number
}

const isDerefGradientStop = (obj: any): obj is DerefGradientStop => {
  if (!isGradientStop(obj)) return false
  const { color, position } = obj
  return isColorHex(color) && typeof position === 'number'
}

export default DerefGradientStop
export { isDerefGradientStop }
