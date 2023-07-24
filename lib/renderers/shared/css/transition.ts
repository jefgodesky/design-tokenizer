import DerefTransitionToken from '../../../types/tokens/dereferenced/transition.js'
import getCubicBezierCSS from './cubic-bezier.js'

const getTransitionCSS = (token: DerefTransitionToken): string => {
  const { duration, delay, timingFunction } = token.$value
  return `${duration} ${getCubicBezierCSS(timingFunction)} ${delay}`
}

export default getTransitionCSS
