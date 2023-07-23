import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import getColophonName from '../../types/colophon/name.js'

const getFontFamilyName = (token: DerefFontFamilyToken, family: string): string => getColophonName(token, family)

export default getFontFamilyName
