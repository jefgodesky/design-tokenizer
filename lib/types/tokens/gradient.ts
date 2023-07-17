import Dictionary, { isDictionary } from '../dictionary.js'
import GradientStop, { isGradientStop } from '../composite/gradient-stop.js'
import Reference, { isReference } from '../basic/reference.js'

interface GradientToken extends Dictionary {
  $type: 'gradient'
  $value: GradientStop[] | Reference
}

const isGradientToken = (obj: any): obj is GradientToken => {
  if (obj === undefined || obj === null) return false
  const { $type, $value, ...dict } = obj
  if (!isDictionary(dict)) return false

  const checks: boolean[] = Array.isArray($value)
    ? $value.map(stop => isGradientStop(stop))
    : [false]
  const isGradient = checks.reduce((acc, curr) => acc && curr, true)
  return $type === 'gradient' && (isGradient || isReference($value))
}

export default GradientToken
export { isGradientToken }