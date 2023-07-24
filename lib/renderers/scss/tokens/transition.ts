import DerefTransitionToken from '../../../types/tokens/dereferenced/transition.js'
import getCubicBezierCSS from '../../shared/css/cubic-bezier.js'

const renderTransitionToken = (name: string, token: DerefTransitionToken): string => {
  const { duration, delay, timingFunction } = token.$value
  return `$${name}: ${duration} ${getCubicBezierCSS(timingFunction)} ${delay};`
}

export default renderTransitionToken
