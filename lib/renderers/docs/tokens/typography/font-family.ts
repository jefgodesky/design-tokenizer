import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getFontFamily from '../../types/font-family/font-family.js'

const getTypographyFontFamily = (token: DerefTypographyToken): string => getFontFamily(token.$value.fontFamily)

export default getTypographyFontFamily
