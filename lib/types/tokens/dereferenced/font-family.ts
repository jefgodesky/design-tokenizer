import FontFamily from '../../basic/font-family.js'
import FontFamilyToken, { isFontFamilyToken } from '../font-family.js'
import { isReference } from '../../basic/reference.js'

interface DerefFontFamilyToken extends Omit<FontFamilyToken, '$value'> {
  $value: FontFamily
}

const isDerefFontFamilyToken = (obj: any): obj is DerefFontFamilyToken => {
  if (!isFontFamilyToken(obj)) return false
  return !isReference(obj.$value)
}

export default DerefFontFamilyToken
export { isDerefFontFamilyToken }
