import Border from '../../composite/border.js'
import BorderToken, { isBorderToken } from '../border.js'
import { isReference } from '../../basic/reference.js'

interface DerefBorderToken extends Omit<BorderToken, '$value'> {
  $value: Border
}

const isDerefBorderToken = (obj: any): obj is DerefBorderToken => {
  if (!isBorderToken(obj)) return false
  return !isReference(obj.$value)
}

export default DerefBorderToken
export { isDerefBorderToken }
