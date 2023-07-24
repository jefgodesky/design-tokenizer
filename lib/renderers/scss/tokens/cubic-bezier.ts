import DerefCubicBezierToken from '../../../types/tokens/dereferenced/cubic-bezier.js'
import getCubicBezierCSS from '../../shared/css/cubic-bezier.js'

const renderCubicBezierToken = (name: string, token: DerefCubicBezierToken): string => {
  return `$${name}: ${getCubicBezierCSS(token.$value)};`
}

export default renderCubicBezierToken
