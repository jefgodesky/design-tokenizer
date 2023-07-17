import Transition from '../../composite/transition.js'
import TransitionToken, { isTransitionToken } from '../transition.js'
import { isReference } from '../../basic/reference.js'

interface DerefTransitionToken extends Omit<TransitionToken, '$value'> {
  $value: Transition
}

const isDerefTransitionToken = (obj: any): obj is DerefTransitionToken => {
  if (!isTransitionToken(obj)) return false
  return !isReference(obj.$value)
}

export default DerefTransitionToken
export { isDerefTransitionToken }
