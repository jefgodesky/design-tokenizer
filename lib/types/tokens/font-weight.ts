import FontWeight, { isFontWeight } from '../basic/font-weight.js'
import GenericToken, { isGenericToken } from '../generic-token.js'
import Reference, { isReference } from '../basic/reference.js'

interface FontWeightToken extends GenericToken<'fontWeight', FontWeight | Reference> {
  $type: 'fontWeight'
  $value: FontWeight | Reference
}

const isFontWeightToken = (obj: any): obj is FontWeightToken => {
  if (!isGenericToken(obj)) return false
  return obj.$type === 'fontWeight' && (isFontWeight(obj.$value) || isReference(obj.$value))
}

export default FontWeightToken
export { isFontWeightToken }
