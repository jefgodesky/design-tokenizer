import CubicBezier, { isCubicBezier } from '../basic/cubic-bezier.js'
import Duration, { isDuration } from '../basic/duration.js'
import Reference, { isReference } from '../basic/reference.js'

interface Transition {
  duration: Duration | Reference
  delay: Duration | Reference
  timingFunction: CubicBezier | Reference
}

const isTransition = (obj: any): obj is Transition => {
  if (obj === null || typeof obj !== 'object') return false
  const { duration, delay, timingFunction } = obj
  if (duration === undefined || !(isDuration(duration) || isReference(duration))) return false
  if (delay === undefined || !(isDuration(delay) || isReference(delay))) return false
  if (timingFunction === undefined || !(isCubicBezier(timingFunction) || isReference(timingFunction))) return false
  return true
}

export default Transition
export { isTransition }
