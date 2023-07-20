import DerefTokenList from '../../types/deref-token-list.js'

import renderColorToken from './tokens/color.js'
import renderDimensionToken from './tokens/dimension.js'
import renderFontFamilyToken from './tokens/font-family.js'
import renderFontWeightToken from './tokens/font-weight.js'
import renderDurationToken from './tokens/duration.js'
import renderCubicBezierToken from './tokens/cubic-bezier.js'
import renderNumberToken from './tokens/number.js'
import renderStrokeStyleToken from './tokens/stroke-style.js'
import renderBorderToken from './tokens/border.js'
import renderTransitionToken from './tokens/transition.js'
import renderShadowToken from './tokens/shadow.js'
import renderGradientToken from './tokens/gradient.js'
import renderTypographyToken from './tokens/typography.js'

import getName from './get-name.js'

const renderer: { [key: string]: Function } = {
  color: renderColorToken,
  dimension: renderDimensionToken,
  fontFamily: renderFontFamilyToken,
  fontWeight: renderFontWeightToken,
  duration: renderDurationToken,
  cubicBezier: renderCubicBezierToken,
  number: renderNumberToken,
  strokeStyle: renderStrokeStyleToken,
  border: renderBorderToken,
  transition: renderTransitionToken,
  shadow: renderShadowToken,
  gradient: renderGradientToken,
  typography: renderTypographyToken
}

const generateVariables = (list: DerefTokenList, options: { prefix?: string, add?: string, remove?: string } = {}): string => {
  const prefix = options.prefix ?? ''
  return Object.keys(list)
    .filter(key => key.startsWith(prefix))
    .map(key => renderer[list[key].$type](getName(key, options), list[key]))
    .join('\n')
}

export default generateVariables
