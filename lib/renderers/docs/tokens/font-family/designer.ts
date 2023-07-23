import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import getColophonDesigner from '../../types/colophon/designer.js'

const getFontFamilyDesigner = (token: DerefFontFamilyToken, family: string): string => getColophonDesigner(token, family)

export default getFontFamilyDesigner
