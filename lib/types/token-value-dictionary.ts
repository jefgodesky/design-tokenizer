import DictionaryKey, { isDictionaryKey } from './dictionary-key.js'
import DerefColorToken, { isDerefColorToken } from './tokens/dereferenced/color.js'
import DerefDimensionToken, { isDerefDimensionToken } from './tokens/dereferenced/dimension.js'
import DerefFontFamilyToken, { isDerefFontFamilyToken } from './tokens/dereferenced/font-family.js'
import DerefFontWeightToken, { isDerefFontWeightToken } from './tokens/dereferenced/font-weight.js'
import DerefDurationToken, { isDerefDurationToken } from './tokens/dereferenced/duration.js'
import DerefCubicBezierToken, { isDerefCubicBezierToken } from './tokens/dereferenced/cubic-bezier.js'
import DerefNumberToken, { isDerefNumberToken } from './tokens/dereferenced/number.js'
import DerefStrokeStyleToken, { isDerefStrokeStyleToken } from './tokens/dereferenced/stroke-style.js'
import DerefBorderToken, { isDerefBorderToken } from './tokens/dereferenced/border.js'
import DerefTransitionToken, { isDerefTransitionToken } from './tokens/dereferenced/transition.js'
import DerefShadowToken, { isDerefShadowToken } from './tokens/dereferenced/shadow.js'
import DerefGradientToken, { isDerefGradientToken } from './tokens/dereferenced/gradient.js'
import DerefTypographyToken, { isDerefTypographyToken } from './tokens/dereferenced/typography.js'

type DerefFontToken = DerefFontFamilyToken | DerefFontWeightToken
type DerefBasicToken = DerefColorToken | DerefDimensionToken | DerefDurationToken | DerefCubicBezierToken | DerefNumberToken | DerefFontToken
type DerefCompositeToken = DerefStrokeStyleToken | DerefBorderToken | DerefTransitionToken | DerefShadowToken | DerefGradientToken | DerefTypographyToken

interface TokenValueDictionary {
  [key: DictionaryKey]: DerefBasicToken | DerefCompositeToken
}

const isTokenValueDictionary = (obj: any): obj is TokenValueDictionary => {
  if (obj === null || Array.isArray(obj)) return false
  return typeof obj === 'object' && Object.keys(obj).reduce((acc: boolean, key: string) => {
    const tests: Function[] = [isDerefColorToken, isDerefDimensionToken,
      isDerefFontFamilyToken, isDerefFontWeightToken, isDerefDurationToken,
      isDerefCubicBezierToken, isDerefNumberToken, isDerefStrokeStyleToken,
      isDerefBorderToken, isDerefTransitionToken, isDerefShadowToken,
      isDerefGradientToken, isDerefTypographyToken]
    const isDerefToken = tests.reduce((acc: boolean, test: Function) => acc || test(obj[key]), false)
    return acc && isDerefToken && isDictionaryKey(key)
  }, true)
}

export default TokenValueDictionary
export { isTokenValueDictionary }
