import GenericToken, { isGenericToken } from '../generic-token.js'
import Reference, { isReference } from '../basic/reference.js'
import Shadow, { isShadow } from '../composite/shadow.js'

interface ShadowToken extends GenericToken<'shadow', Shadow | Reference> {}

const isShadowToken = (obj: any): obj is ShadowToken => {
  if (!isGenericToken(obj)) return false
  return obj.$type === 'shadow' && (isShadow(obj.$value) || isReference(obj.$value))
}

export default ShadowToken
export { isShadowToken }
