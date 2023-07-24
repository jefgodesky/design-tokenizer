import DerefFontFamilyToken from '../../../types/tokens/dereferenced/font-family.js'
import getFontFamilyCSS from '../../shared/css/font-family.js'

const renderFontFamilyToken = (name: string, token: DerefFontFamilyToken): string => `$${name}: ${getFontFamilyCSS(token.$value)};`

export default renderFontFamilyToken
