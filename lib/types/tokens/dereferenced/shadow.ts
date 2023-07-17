import DerefShadow, { isDerefShadow } from '../../composite/dereferenced/shadow.js'
import ShadowToken, { isShadowToken } from '../shadow.js'

interface DerefShadowToken extends Omit<ShadowToken, '$value'> {
  $value: DerefShadow
}

const isDerefShadowToken = (obj: any): obj is DerefShadowToken => {
  if (!isShadowToken(obj)) return false
  return isDerefShadow(obj.$value)
}

export default DerefShadowToken
export { isDerefShadowToken }
