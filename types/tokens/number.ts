import Dictionary, { isDictionary } from '../dictionary.js'
import Reference, { isReference } from '../basic/reference.js'

interface NumberToken extends Dictionary {
  $type: 'number'
  $value: number | Reference
}

const isNumberToken = (obj: any): obj is NumberToken => {
  if (!isDictionary(obj)) return false
  const { $type, $value } = obj
  return $type === 'number' && (typeof $value === 'number' || isReference($value))
}

export default NumberToken
export { isNumberToken }
