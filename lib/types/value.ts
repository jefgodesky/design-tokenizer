import Border, { isBorder } from './composite/border.js'
import ColorHex, { isColorHex } from './basic/color-hex.js'
import CubicBezier, { isCubicBezier } from './basic/cubic-bezier.js'
import Dimension, { isDimension } from './basic/dimension.js'
import Duration, { isDuration } from './basic/duration.js'
import FontFamily, { isFontFamily } from './basic/font-family.js'
import FontWeight, { isFontWeight } from './basic/font-weight.js'
import GradientStop, { isGradientStop } from './composite/gradient-stop.js'
import Shadow, { isShadow } from './composite/shadow.js'
import StrokeStyle, { isStrokeStyleObject } from './composite/stroke-style.js'
import Transition, { isTransition } from './composite/transition.js'
import Typography, { isTypography } from './composite/typography.js'

type Value = string | number | Border | ColorHex | CubicBezier | Dimension | Duration | FontFamily | FontWeight | GradientStop[] | Shadow | StrokeStyle | Transition | Typography

const isValue = (obj: unknown): obj is Value => {
  const numberGuard = (x: unknown): x is number => typeof x === 'number'
  const stringGuard = (x: unknown): x is string => typeof x === 'string'
  const isGradient = (x: unknown): x is GradientStop[] => Array.isArray(x) && x.every(isGradientStop)
  const guards = [isBorder, isColorHex, isCubicBezier, isDimension, isDuration,
    isFontFamily, isFontWeight, isGradient, isShadow, isStrokeStyleObject,
    isTransition, isTypography, numberGuard, stringGuard]
  for (const guard of guards) {
    if (guard(obj)) return true
  }
  return false
}

export default Value
export { isValue }
