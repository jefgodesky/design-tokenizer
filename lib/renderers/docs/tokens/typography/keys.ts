import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getColophonKeys from '../../types/colophon/keys.js'

const getTypographyKeys = (token: DerefTypographyToken): string[] => getColophonKeys(token)

export default getTypographyKeys
