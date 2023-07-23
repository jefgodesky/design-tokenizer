import DerefTypographyToken from '../../../types/tokens/dereferenced/typography.js'
import getAbsoluteLineHeight from '../../shared/line-height-absolute.js'
import transformFontFamily from '../transformers/font-family.js'

const renderTypographyToken = (name: string, token: DerefTypographyToken): string => {
  const { fontFamily, fontSize, fontStyle, fontWeight, letterSpacing } = token.$value
  const absLineHeight = getAbsoluteLineHeight(token)
  const elems = [
    fontStyle,
    fontWeight,
    `${fontSize}/${absLineHeight}`,
    transformFontFamily(fontFamily)
  ].filter(elem => elem !== undefined)
  return [
    `$${name}: ${elems.join(' ')};`,
    `$${name}-letter-spacing: ${letterSpacing};`
  ].join('\n')
}

export default renderTypographyToken
