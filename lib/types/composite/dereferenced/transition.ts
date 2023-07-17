import CubicBezier, { isCubicBezier } from '../../basic/cubic-bezier.js'
import Duration, { isDuration } from '../../basic/duration.js'
import Transition, { isTransition } from '../transition.js'

interface DerefTransition extends Omit<Transition, 'duration' | 'delay' | 'timingFunction'> {
  duration: Duration
  delay: Duration
  timingFunction: CubicBezier
}

const isDerefTransition = (obj: any): obj is DerefTransition => {
  if (!isTransition(obj)) return false
  const { duration, delay, timingFunction } = obj
  return isDuration(duration) && isDuration(delay) && isCubicBezier(timingFunction)
}

export default DerefTransition
export { isDerefTransition }
