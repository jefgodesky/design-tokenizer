import Dictionary, { isDictionary } from '../dictionary.js'
import Dimension, { isDimension } from '../basic/dimension.js'
import Reference, { isReference } from '../basic/reference.js'

interface DimensionToken extends Dictionary {
  $type: 'dimension'
  $value: Dimension | Reference
}

const isDimensionToken = (obj: any): obj is DimensionToken => {
  if (obj === undefined || obj === null) return false
  const { $type, $value, ...dict } = obj
  if (!isDictionary(dict)) return false
  return $type === 'dimension' && (isDimension($value) || isReference($value))
}

export default DimensionToken
export { isDimensionToken }
