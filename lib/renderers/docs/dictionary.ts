import DerefTokenList from '../../types/deref-token-list.js'
import Dictionary from '../../types/dictionary.js'

import { isDerefColorToken } from '../../types/tokens/dereferenced/color.js'
import { isDerefDimensionToken } from '../../types/tokens/dereferenced/dimension.js'
import { isDerefFontFamilyToken } from '../../types/tokens/dereferenced/font-family.js'
import { isDerefFontWeightToken } from '../../types/tokens/dereferenced/font-weight.js'
import { isDerefDurationToken } from '../../types/tokens/dereferenced/duration.js'
import { isDerefCubicBezierToken } from '../../types/tokens/dereferenced/cubic-bezier.js'
import { isDerefNumberToken } from '../../types/tokens/dereferenced/number.js'
import { isDerefStrokeStyleToken } from '../../types/tokens/dereferenced/stroke-style.js'
import { isDerefBorderToken } from '../../types/tokens/dereferenced/border.js'
import { isDerefTransitionToken } from '../../types/tokens/dereferenced/transition.js'
import { isDerefShadowToken } from '../../types/tokens/dereferenced/shadow.js'
import { isDerefGradientToken } from '../../types/tokens/dereferenced/gradient.js'
import { isDerefTypographyToken } from '../../types/tokens/dereferenced/typography.js'

import addColorToDictionary from './tokens/color/dictionary.js'
import addDimensionToDictionary from './tokens/dimension/dictionary.js'
import addFontFamilyToDictionary from './tokens/font-family/dictionary.js'
import addFontWeightToDictionary from './tokens/font-weight/dictionary.js'
import addDurationToDictionary from './tokens/duration/dictionary.js'
import addCubicBezierToDictionary from './tokens/cubic-bezier/dictionary.js'
import addNumberToDictionary from './tokens/number/dictionary.js'
import addStrokeStyleToDictionary from './tokens/stroke-style/dictionary.js'
import addBorderToDictionary from './tokens/border/dictionary.js'
import addTransitionToDictionary from './tokens/transition/dictionary.js'
import addShadowToDictionary from './tokens/shadow/dictionary.js'
import addGradientToDictionary from './tokens/gradient/dictionary.js'
import addTypographyToDictionary from './tokens/typography/dictionary.js'

const getDictionary = (list: DerefTokenList, dict: Dictionary = {}): Dictionary => {
  for (const key in list) {
    const token = list[key]
    if (token.$type === 'color' && isDerefColorToken(token)) {
      dict = addColorToDictionary(key, token, dict)
    } else if (token.$type === 'dimension' && isDerefDimensionToken(token)) {
      dict = addDimensionToDictionary(key, token, dict)
    } else if (token.$type === 'fontFamily' && isDerefFontFamilyToken(token)) {
      dict = addFontFamilyToDictionary(key, token, dict)
    } else if (token.$type === 'fontWeight' && isDerefFontWeightToken(token)) {
      dict = addFontWeightToDictionary(key, token, dict)
    } else if (token.$type === 'duration' && isDerefDurationToken(token)) {
      dict = addDurationToDictionary(key, token, dict)
    } else if (token.$type === 'cubicBezier' && isDerefCubicBezierToken(token)) {
      dict = addCubicBezierToDictionary(key, token, dict)
    } else if (token.$type === 'number' && isDerefNumberToken(token)) {
      dict = addNumberToDictionary(key, token, dict)
    } else if (token.$type === 'strokeStyle' && isDerefStrokeStyleToken(token)) {
      dict = addStrokeStyleToDictionary(key, token, dict)
    } else if (token.$type === 'border' && isDerefBorderToken(token)) {
      dict = addBorderToDictionary(key, token, dict)
    } else if (token.$type === 'transition' && isDerefTransitionToken(token)) {
      dict = addTransitionToDictionary(key, token, dict)
    } else if (token.$type === 'shadow' && isDerefShadowToken(token)) {
      dict = addShadowToDictionary(key, token, dict)
    } else if (token.$type === 'gradient' && isDerefGradientToken(token)) {
      dict = addGradientToDictionary(key, token, dict)
    } else if (token.$type === 'typography' && isDerefTypographyToken(token)) {
      dict = addTypographyToDictionary(key, token, dict)
    }
  }

  return dict
}

export default getDictionary
