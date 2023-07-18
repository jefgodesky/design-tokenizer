import Dimension, { isDimension } from '../basic/dimension.js'
import GenericToken, { isGenericToken } from '../generic-token.js'
import Reference, { isReference } from '../basic/reference.js'

interface DimensionToken extends GenericToken<'dimension', Dimension | Reference> {}

const isDimensionToken = (obj: any): obj is DimensionToken => {
  if (!isGenericToken(obj)) return false
  return obj.$type === 'dimension' && (isDimension(obj.$value) || isReference(obj.$value))
}

export default DimensionToken
export { isDimensionToken }
