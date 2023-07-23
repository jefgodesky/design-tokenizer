import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'

const getTypographyFontWeight = (token: DerefTypographyToken): string => `${token.$value.fontWeight}`

export default getTypographyFontWeight
