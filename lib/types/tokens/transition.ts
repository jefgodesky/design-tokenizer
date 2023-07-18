import GenericToken, { isGenericToken } from '../generic-token.js'
import Reference, { isReference } from '../basic/reference.js'
import Transition, { isTransition } from '../composite/transition.js'

interface TransitionToken extends GenericToken<'transition', Transition | Reference> {}

const isTransitionToken = (obj: any): obj is TransitionToken => {
  if (!isGenericToken(obj)) return false
  return obj.$type === 'transition' && (isTransition(obj.$value) || isReference(obj.$value))
}

export default TransitionToken
export { isTransitionToken }
