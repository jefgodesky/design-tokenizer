import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getColophonURL from '../../types/colophon/url.js'

const getTypographyURL = (token: DerefTypographyToken, family: string): string => getColophonURL(token, family)

export default getTypographyURL
