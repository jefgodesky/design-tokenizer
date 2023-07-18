import Border, { isBorder } from '../composite/border.js'
import GenericToken, { isGenericToken } from '../generic-token.js'
import Reference, { isReference } from '../basic/reference.js'

interface BorderToken extends GenericToken<'border', Border | Reference> {}

const isBorderToken = (obj: any): obj is BorderToken => {
  if (!isGenericToken(obj)) return false
  return obj.$type === 'border' && (isBorder(obj.$value) || isReference(obj.$value))
}

export default BorderToken
export { isBorderToken }
