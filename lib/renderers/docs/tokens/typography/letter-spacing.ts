import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'

const getTypographyLetterSpacing = (token: DerefTypographyToken): string => token.$value.letterSpacing

export default getTypographyLetterSpacing
