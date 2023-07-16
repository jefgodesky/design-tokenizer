import Dictionary, { isDictionary } from '../dictionary.js'
import Dimension, { isDimension } from '../basic/dimension.js'
import Reference, { isReference } from '../basic/reference.js'

interface DimensionToken extends Dictionary {
  $type: 'dimension'
  $value: Dimension | Reference
}

const isDimensionToken = (obj: any): obj is DimensionToken => {
  if (!isDictionary(obj)) return false
  const { $type, $value } = obj
  return $type === 'dimension' && (isDimension($value) || isReference($value))
}

export default DimensionToken
export { isDimensionToken }
