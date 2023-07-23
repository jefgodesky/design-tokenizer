import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import getColophonKeys from '../../types/colophon/keys.js'

const getFontFamilyKeys = (token: DerefFontFamilyToken): string[] => getColophonKeys(token)

export default getFontFamilyKeys
