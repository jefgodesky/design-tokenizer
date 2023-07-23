import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import getColophonURL from '../../types/colophon/url.js'

const getFontFamilyURL = (token: DerefFontFamilyToken, family: string): string => getColophonURL(token, family)

export default getFontFamilyURL
