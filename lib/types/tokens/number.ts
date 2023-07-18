import GenericToken, { isGenericToken } from '../generic-token.js'
import Reference, { isReference } from '../basic/reference.js'

interface NumberToken extends GenericToken<'number', number | Reference> {}

const isNumberToken = (obj: any): obj is NumberToken => {
  if (!isGenericToken(obj)) return false
  return obj.$type === 'number' && (typeof obj.$value === 'number' || isReference(obj.$value))
}

export default NumberToken
export { isNumberToken }
