import Dictionary, { isDictionary } from '../dictionary.js'
import FontFamily, { isFontFamily } from '../basic/font-family.js'
import Reference, { isReference } from '../basic/reference.js'

interface FontFamilyToken extends Dictionary {
  $type: 'fontFamily'
  $value: FontFamily | Reference
}

const isFontFamilyToken = (obj: any): obj is FontFamilyToken => {
  if (!isDictionary(obj)) return false
  const { $type, $value } = obj
  return $type === 'fontFamily' && (isFontFamily($value) || isReference($value))
}

export default FontFamilyToken
export { isFontFamilyToken }
