import CubicBezier, { isCubicBezier } from '../basic/cubic-bezier.js'
import GenericToken, { isGenericToken } from '../generic-token.js'
import Reference, { isReference } from '../basic/reference.js'

interface CubicBezierToken extends GenericToken<'cubicBezier', CubicBezier | Reference> {}

const isCubicBezierToken = (obj: any): obj is CubicBezierToken => {
  if (!isGenericToken(obj)) return false
  return obj.$type === 'cubicBezier' && (isCubicBezier(obj.$value) || isReference(obj.$value))
}

export default CubicBezierToken
export { isCubicBezierToken }
