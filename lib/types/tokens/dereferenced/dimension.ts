import Dimension from '../../basic/dimension.js'
import DimensionToken, { isDimensionToken } from '../dimension.js'
import { isReference } from '../../basic/reference.js'

interface DerefDimensionToken extends Omit<DimensionToken, '$value'> {
  $value: Dimension
}

const isDerefDimensionToken = (obj: any): obj is DerefDimensionToken => {
  if (!isDimensionToken(obj)) return false
  return !isReference(obj.$value)
}

export default DerefDimensionToken
export { isDerefDimensionToken }
