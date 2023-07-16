import CubicBezier, { isCubicBezier } from '../basic/cubic-bezier.js'
import Dictionary, { isDictionary } from '../dictionary.js'
import Reference, { isReference } from '../basic/reference.js'

interface CubicBezierToken extends Dictionary {
  $type: 'cubicBezier'
  $value: CubicBezier | Reference
}

const isCubicBezierToken = (obj: any): obj is CubicBezierToken => {
  if (!isDictionary(obj)) return false
  const { $type, $value } = obj
  return $type === 'cubicBezier' && (isCubicBezier($value) || isReference($value))
}

export default CubicBezierToken
export { isCubicBezierToken }
