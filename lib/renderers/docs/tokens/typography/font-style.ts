import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'

const getTypographyFontStyle = (token: DerefTypographyToken): string => token.$value.fontStyle ?? ''

export default getTypographyFontStyle
