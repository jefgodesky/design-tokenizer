import DerefTypographyToken from '../../../types/tokens/dereferenced/typography.js'
import transformFontFamily from '../transformers/font-family.js'

const renderTypographyToken = (name: string, token: DerefTypographyToken): string => {
  const { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight } = token.$value
  const units = fontSize.endsWith('rem') ? 'rem' : 'px'
  const size = parseInt(fontSize.substring(0, fontSize.indexOf(units)))
  const fontSizeDeclaration = isNaN(size) ? fontSize : `${fontSize}/${size * lineHeight}${units}`
  return [
    `$${name}: ${fontWeight} ${fontSizeDeclaration} ${transformFontFamily(fontFamily)};`,
    `$${name}-letter-spacing: ${letterSpacing};`
  ].join('\n')
}

export default renderTypographyToken
