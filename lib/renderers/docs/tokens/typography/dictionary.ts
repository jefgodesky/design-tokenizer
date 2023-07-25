import rfdc from 'rfdc'
import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import Dictionary from '../../../../types/dictionary.js'

import getSCSSVariable from '../../scss.js'
import getTypographyFontFamily from './font-family.js'
import getTypographyFontSize from './font-size.js'
import getTypographyFontStyle from './font-style.js'
import getTypographyFontWeight from './font-weight.js'
import getTypographyLetterSpacing from './letter-spacing.js'
import getTypographyLineHeight from './line-height.js'
import getTypographyAbsoluteLineHeight from './absolute-line-height.js'
import getTypographyCSS from '../../../shared/css/typography.js'
import getTypographyKeys from './keys.js'
import getTypographyName from './name.js'
import getTypographyDesigner from './designer.js'
import getTypographyURL from './url.js'

const clone = rfdc()

const addTypographyToDictionary = (name: string, token: DerefTypographyToken, dict: Dictionary): Dictionary => {
  const cpy = clone(dict)

  const colophon = getTypographyKeys(token)
  for (const key of colophon) {
    cpy[[name, key].join('.')] = getTypographyName(token, key)
    cpy[[name, key, 'designer'].join('.')] = getTypographyDesigner(token, key)
    cpy[[name, key, 'url'].join('.')] = getTypographyURL(token, key)
  }

  const { $description } = token
  if ($description !== undefined) cpy[name + '.description'] = $description

  const scss = getSCSSVariable(token)
  if (scss.length > 0) cpy[name + '.scss'] = scss

  cpy[name + '.family'] = getTypographyFontFamily(token)
  cpy[name + '.size'] = getTypographyFontSize(token)
  cpy[name + '.weight'] = getTypographyFontWeight(token)
  cpy[name + '.css'] = getTypographyCSS(token)
  cpy[name + '.spacing.letter'] = getTypographyLetterSpacing(token)
  cpy[name + '.spacing.line'] = getTypographyLineHeight(token)
  cpy[name + '.spacing.line.abs'] = getTypographyAbsoluteLineHeight(token)

  const style = getTypographyFontStyle(token)
  if (style !== '') cpy[name + '.style'] = style

  return cpy
}

export default addTypographyToDictionary
