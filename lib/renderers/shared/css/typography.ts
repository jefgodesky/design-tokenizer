import DerefTypographyToken from '../../../types/tokens/dereferenced/typography.js'
import getFontFamilyCSS from './font-family.js'
import getAbsoluteLineHeight from '../line-height-absolute.js'

const getTypographyCSS = (token: DerefTypographyToken): string => {
  const { fontSize, fontStyle, fontWeight } = token.$value
  const fontFamily = getFontFamilyCSS(token.$value.fontFamily)
  const height = getAbsoluteLineHeight(token)
  return fontStyle === undefined
    ? `${fontWeight} ${fontSize}/${height} ${fontFamily}`
    : `${fontStyle} ${fontWeight} ${fontSize}/${height} ${fontFamily}`
}

export default getTypographyCSS
