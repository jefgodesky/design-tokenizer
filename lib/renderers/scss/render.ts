import { writeFileSync } from 'fs'
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

import getExtension from '../extension.js'
import getFiles from './get-files.js'

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

const renderSCSS = (list: DerefTokenList, verbose: boolean = true): void => {
  const files = getFiles(list)
  const keys = Object.keys(list)
  for (const file of files) {
    const contents = keys.map(key => {
      const token = list[key]
      const { $type, $description } = token
      const ext = getExtension(token)
      return ext?.scss?.file === file
        ? `${renderer[$type](ext?.scss?.variable, token) as string} // ${$description as string ?? key}`
        : null
    }).filter((item): item is string => item !== null)
    writeFileSync(file, contents.join('\n'), { encoding: 'utf8' })
    if (verbose) console.log(`scss: Generating ${file}`)
  }
}

export default renderSCSS
