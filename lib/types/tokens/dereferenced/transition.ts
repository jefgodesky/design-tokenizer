import DerefTransition, { isDerefTransition } from '../../composite/dereferenced/transition.js'
import TransitionToken, { isTransitionToken } from '../transition.js'

interface DerefTransitionToken extends Omit<TransitionToken, '$value'> {
  $value: DerefTransition
}

const isDerefTransitionToken = (obj: any): obj is DerefTransitionToken => {
  if (!isTransitionToken(obj)) return false
  return isDerefTransition(obj.$value)
}

export default DerefTransitionToken
export { isDerefTransitionToken }
