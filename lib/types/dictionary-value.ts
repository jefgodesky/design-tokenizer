import BorderToken, { isBorderToken } from './tokens/border.js'
import ColorToken, { isColorToken } from './tokens/color.js'
import CubicBezierToken, { isCubicBezierToken } from './tokens/cubic-bezier.js'
import Dictionary, { isDictionary } from './dictionary.js'
import DimensionToken, { isDimensionToken } from './tokens/dimension.js'
import DurationToken, { isDurationToken } from './tokens/duration.js'
import FontFamilyToken, { isFontFamilyToken } from './tokens/font-family.js'
import FontWeightToken, { isFontWeightToken } from './tokens/font-weight.js'
import GradientToken, { isGradientToken } from './tokens/gradient.js'
import NumberToken, { isNumberToken } from './tokens/number.js'
import ShadowToken, { isShadowToken } from './tokens/shadow.js'
import StrokeStyleToken, { isStrokeStyleToken } from './tokens/stroke-style.js'
import TransitionToken, { isTransitionToken } from './tokens/transition.js'
import TypographyToken, { isTypographyToken } from './tokens/typography.js'

type DictionaryValuePrimitives = Dictionary | string | number | boolean
type FontTokenTypes = FontFamilyToken | FontWeightToken
type BasicTokenTypes = ColorToken | DimensionToken | FontTokenTypes | DurationToken | CubicBezierToken | NumberToken
type CompositeTokenTypes = StrokeStyleToken | BorderToken | TransitionToken | ShadowToken | GradientToken | TypographyToken
type DictionaryValue = DictionaryValuePrimitives | BasicTokenTypes | CompositeTokenTypes | DictionaryValue[]

const isDictionaryValue = (obj: any): boolean => {
  const types = ['boolean', 'number', 'string']
  if (types.includes(typeof obj)) return true

  const tests = [isColorToken, isDimensionToken, isFontFamilyToken,
    isFontWeightToken, isDurationToken, isCubicBezierToken, isNumberToken,
    isStrokeStyleToken, isBorderToken, isTransitionToken, isShadowToken,
    isGradientToken, isTypographyToken, isDictionary]
  for (const test of tests) {
    if (test(obj)) return true
  }

  return Array.isArray(obj) && obj.reduce((acc: boolean, curr: any) => acc && isDictionaryValue(curr), true)
}

export default DictionaryValue
export { isDictionaryValue }
