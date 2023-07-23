import { isDerefBorderToken } from './tokens/dereferenced/border.js'
import { isDerefColorToken } from './tokens/dereferenced/color.js'
import { isDerefCubicBezierToken } from './tokens/dereferenced/cubic-bezier.js'
import { isDerefDimensionToken } from './tokens/dereferenced/dimension.js'
import { isDerefDurationToken } from './tokens/dereferenced/duration.js'
import { isDerefFontFamilyToken } from './tokens/dereferenced/font-family.js'
import { isDerefFontWeightToken } from './tokens/dereferenced/font-weight.js'
import { isDerefGradientToken } from './tokens/dereferenced/gradient.js'
import { isDerefNumberToken } from './tokens/dereferenced/number.js'
import { isDerefShadowToken } from './tokens/dereferenced/shadow.js'
import { isDerefStrokeStyleToken } from './tokens/dereferenced/stroke-style.js'
import { isDerefTransitionToken } from './tokens/dereferenced/transition.js'
import { isDerefTypographyToken } from './tokens/dereferenced/typography.js'

import DerefToken from './deref.js'
import isObject from './guards/object.js'

interface DerefTokenList {
  [key: string]: DerefToken
}

const isDerefTokenList = (obj: any): obj is DerefTokenList => {
  if (!isObject(obj)) return false
  return typeof obj === 'object' && Object.keys(obj).reduce((acc: boolean, key: string) => {
    const tests = [isDerefBorderToken, isDerefColorToken,
      isDerefCubicBezierToken, isDerefDimensionToken, isDerefDurationToken,
      isDerefFontFamilyToken, isDerefFontWeightToken, isDerefGradientToken,
      isDerefNumberToken, isDerefShadowToken, isDerefStrokeStyleToken,
      isDerefTransitionToken, isDerefTypographyToken]
    return tests.reduce((acc: boolean, curr: Function) => acc || curr(obj[key]), false)
  }, true)
}

export default DerefTokenList
export { isDerefTokenList }
