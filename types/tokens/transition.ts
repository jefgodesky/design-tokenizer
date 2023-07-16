import Dictionary, { isDictionary } from '../dictionary.js'
import Reference, { isReference } from '../basic/reference.js'
import Transition, { isTransition } from '../composite/transition.js'

interface TransitionToken extends Dictionary {
  $type: 'transition'
  $value: Transition | Reference
}

const isTransitionToken = (obj: any): obj is TransitionToken => {
  if (!isDictionary(obj)) return false
  const { $type, $value } = obj
  return $type === 'transition' && (isTransition($value) || isReference($value))
}

export default TransitionToken
export { isTransitionToken }
