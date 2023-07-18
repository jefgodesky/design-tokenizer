import GenericToken, { isGenericToken } from '../generic-token.js'
import GradientStop, { isGradientStop } from '../composite/gradient-stop.js'
import Reference, { isReference } from '../basic/reference.js'

interface GradientToken extends GenericToken<'gradient', GradientStop[] | Reference> {}

const isGradientToken = (obj: any): obj is GradientToken => {
  if (!isGenericToken(obj)) return false
  const checks: boolean[] = Array.isArray(obj.$value)
    ? obj.$value.map((stop: any) => isGradientStop(stop))
    : [false]
  const isGradient = checks.reduce((acc, curr) => acc && curr, true)
  return obj.$type === 'gradient' && (isGradient || isReference(obj.$value))
}

export default GradientToken
export { isGradientToken }
