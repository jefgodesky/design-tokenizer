import DerefTransitionToken from '../../../types/tokens/dereferenced/transition.js'
import transformCubicBezier from '../transformers/cubic-bezier.js'

const renderTransitionToken = (name: string, token: DerefTransitionToken): string => {
  const { duration, delay, timingFunction } = token.$value
  return `$${name}: ${duration} ${transformCubicBezier(timingFunction)} ${delay};`
}

export default renderTransitionToken
