import Dictionary, { isDictionary } from '../dictionary.js'
import FontWeight, { isFontWeight } from '../basic/font-weight.js'
import Reference, { isReference } from '../basic/reference.js'

interface FontWeightToken extends Dictionary {
  $type: 'fontWeight'
  $value: FontWeight | Reference
}

const isFontWeightToken = (obj: any): obj is FontWeightToken => {
  if (obj === undefined || obj === null) return false
  const { $type, $value, ...dict } = obj
  if (!isDictionary(dict)) return false
  return $type === 'fontWeight' && (isFontWeight($value) || isReference($value))
}

export default FontWeightToken
export { isFontWeightToken }
