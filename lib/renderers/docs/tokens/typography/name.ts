import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getColophonName from '../../types/colophon/name.js'

const getTypographyName = (token: DerefTypographyToken, family: string): string => getColophonName(token, family)

export default getTypographyName
