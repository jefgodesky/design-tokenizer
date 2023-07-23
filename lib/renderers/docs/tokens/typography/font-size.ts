import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'

const getTypographyFontSize = (token: DerefTypographyToken): string => token.$value.fontSize

export default getTypographyFontSize
