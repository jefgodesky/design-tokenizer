import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import getFontFamily from '../../types/font-family/font-family.js'

const getFontFamilyValue = (token: DerefFontFamilyToken): string => getFontFamily(token.$value)

export default getFontFamilyValue
