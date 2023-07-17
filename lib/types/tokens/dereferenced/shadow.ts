import Shadow from '../../composite/shadow.js'
import ShadowToken, { isShadowToken } from '../shadow.js'
import { isReference } from '../../basic/reference.js'

interface DerefShadowToken extends Omit<ShadowToken, '$value'> {
  $value: Shadow
}

const isDerefShadowToken = (obj: any): obj is DerefShadowToken => {
  if (!isShadowToken(obj)) return false
  return !isReference(obj.$value)
}

export default DerefShadowToken
export { isDerefShadowToken }
