import CubicBezier, { isCubicBezier } from '../basic/cubic-bezier.js'
import Dictionary, { isDictionary } from '../dictionary.js'
import Reference, { isReference } from '../basic/reference.js'

interface CubicBezierToken extends Dictionary {
  $type: 'cubicBezier'
  $value: CubicBezier | Reference
}

const isCubicBezierToken = (obj: any): obj is CubicBezierToken => {
  if (obj === undefined || obj === null) return false
  const { $type, $value, ...dict } = obj
  if (!isDictionary(dict)) return false
  return $type === 'cubicBezier' && (isCubicBezier($value) || isReference($value))
}

export default CubicBezierToken
export { isCubicBezierToken }
