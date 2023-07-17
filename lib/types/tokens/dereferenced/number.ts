import NumberToken, { isNumberToken } from '../number.js'
import { isReference } from '../../basic/reference.js'

interface DerefNumberToken extends Omit<NumberToken, '$value'> {
  $value: number
}

const isDerefNumberToken = (obj: any): obj is DerefNumberToken => {
  if (!isNumberToken(obj)) return false
  return !isReference(obj.$value)
}

export default DerefNumberToken
export { isDerefNumberToken }
