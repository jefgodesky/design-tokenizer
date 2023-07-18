import { isColorToken } from './tokens/color.js'
import { isDimensionToken } from './tokens/dimension.js'
import { isFontFamilyToken } from './tokens/font-family.js'
import { isFontWeightToken } from './tokens/font-weight.js'
import { isDurationToken } from './tokens/duration.js'
import { isCubicBezierToken } from './tokens/cubic-bezier.js'
import { isNumberToken } from './tokens/number.js'
import { isStrokeStyleToken } from './tokens/stroke-style.js'
import { isBorderToken } from './tokens/border.js'
import { isTransitionToken } from './tokens/transition.js'
import { isShadowToken } from './tokens/shadow.js'
import { isGradientToken } from './tokens/gradient.js'
import { isTypographyToken } from './tokens/typography.js'

import Token from './token.js'
import allUnreservedProps from './guards/all-unreserved-props.js'

interface Group {
  [key: string]: Group | Token | boolean | string | number | boolean[] | string[] | number[]
}

const isGroup = (obj: any): obj is Group => {
  if (obj === null || Array.isArray(obj) || typeof obj !== 'object') return false

  const tokenTests = [isColorToken, isDimensionToken, isFontFamilyToken,
    isFontWeightToken, isDurationToken, isCubicBezierToken, isNumberToken,
    isStrokeStyleToken, isBorderToken, isTransitionToken, isShadowToken,
    isGradientToken, isTypographyToken]
  if (tokenTests.reduce((acc: boolean, curr: Function) => acc || curr(obj), false)) return true

  if (!allUnreservedProps(obj)) return false
  return Object.keys(obj).reduce((acc: boolean, key: string) => {
    const allowed = ['boolean', 'string', 'number']
    const isAllowed: boolean = allowed.includes(typeof obj[key])
    const isAllowedArray: boolean = Array.isArray(obj[key]) && obj[key].reduce((acc: boolean, curr: any) => acc && allowed.includes(typeof curr), true)
    const isValidGroup: boolean = !isAllowed && !isAllowedArray && isGroup(obj[key])
    return acc && (isAllowed || isAllowedArray || isValidGroup)
  }, true)
}

export default Group
export { isGroup }
