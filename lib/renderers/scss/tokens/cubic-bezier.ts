import DerefCubicBezierToken from '../../../types/tokens/dereferenced/cubic-bezier.js'
import transformCubicBezier from '../transformers/cubic-bezier.js'

const renderCubicBezierToken = (name: string, token: DerefCubicBezierToken): string => {
  return `$${name}: ${transformCubicBezier(token.$value)};`
}

export default renderCubicBezierToken
