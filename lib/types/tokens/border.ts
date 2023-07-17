import Border, { isBorder } from '../composite/border.js'
import Dictionary, { isDictionary } from '../dictionary.js'
import Reference, { isReference } from '../basic/reference.js'

interface BorderToken extends Dictionary {
  $type: 'border'
  $value: Border | Reference
}

const isBorderToken = (obj: any): obj is BorderToken => {
  if (obj === undefined || obj === null) return false
  const { $type, $value, ...dict } = obj
  if (!isDictionary(dict)) return false
  return $type === 'border' && (isBorder($value) || isReference($value))
}

export default BorderToken
export { isBorderToken }
