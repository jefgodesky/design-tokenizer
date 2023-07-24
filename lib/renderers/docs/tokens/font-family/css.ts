import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import getFontFamilyCSS from '../../../shared/css/font-family.js'

const getFontFamilyTokenCSS = (token: DerefFontFamilyToken): string => getFontFamilyCSS(token.$value)

export default getFontFamilyTokenCSS
