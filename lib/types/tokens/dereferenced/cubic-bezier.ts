import CubicBezier from '../../basic/cubic-bezier.js'
import CubicBezierToken, { isCubicBezierToken } from '../cubic-bezier.js'
import { isReference } from '../../basic/reference.js'

interface DerefCubicBezierToken extends Omit<CubicBezierToken, '$value'> {
  $value: CubicBezier
}

const isDerefCubicBezierToken = (obj: any): obj is DerefCubicBezierToken => {
  if (!isCubicBezierToken(obj)) return false
  return !isReference(obj.$value)
}

export default DerefCubicBezierToken
export { isDerefCubicBezierToken }
