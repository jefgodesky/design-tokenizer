import Dictionary, { isDictionary } from '../dictionary.js'
import Reference, { isReference } from '../basic/reference.js'
import Shadow, { isShadow } from '../composite/shadow.js'

interface ShadowToken extends Dictionary {
  $type: 'shadow'
  $value: Shadow | Reference
}

const isShadowToken = (obj: any): obj is ShadowToken => {
  if (!isDictionary(obj)) return false
  const { $type, $value } = obj
  return $type === 'shadow' && (isShadow($value) || isReference($value))
}

export default ShadowToken
export { isShadowToken }
