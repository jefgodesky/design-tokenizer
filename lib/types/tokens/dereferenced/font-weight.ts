import FontWeight from '../../basic/font-weight.js'
import FontWeightToken, { isFontWeightToken } from '../font-weight.js'
import { isReference } from '../../basic/reference.js'

interface DerefFontWeightToken extends Omit<FontWeightToken, '$value'> {
  $value: FontWeight
}

const isDerefFontWeightToken = (obj: any): obj is DerefFontWeightToken => {
  if (!isFontWeightToken(obj)) return false
  return !isReference(obj.$value)
}

export default DerefFontWeightToken
export { isDerefFontWeightToken }
