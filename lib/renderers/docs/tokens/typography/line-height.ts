import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'

const getTypographyLineHeight = (token: DerefTypographyToken): string => `${token.$value.lineHeight}`

export default getTypographyLineHeight
