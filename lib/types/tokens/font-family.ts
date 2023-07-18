import FontFamily, { isFontFamily } from '../basic/font-family.js'
import GenericToken, { isGenericToken } from '../generic-token.js'
import Reference, { isReference } from '../basic/reference.js'

interface FontFamilyToken extends GenericToken<'fontFamily', FontFamily | Reference> {}

const isFontFamilyToken = (obj: any): obj is FontFamilyToken => {
  if (!isGenericToken(obj)) return false
  return obj.$type === 'fontFamily' && (isFontFamily(obj.$value) || isReference(obj.$value))
}

export default FontFamilyToken
export { isFontFamilyToken }
