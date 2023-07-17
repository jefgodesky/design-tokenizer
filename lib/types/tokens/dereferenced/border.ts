import DerefBorder, { isDerefBorder } from '../../composite/dereferenced/border.js'
import BorderToken, { isBorderToken } from '../border.js'

interface DerefBorderToken extends Omit<BorderToken, '$value'> {
  $value: DerefBorder
}

const isDerefBorderToken = (obj: any): obj is DerefBorderToken => {
  if (!isBorderToken(obj)) return false
  return isDerefBorder(obj.$value)
}

export default DerefBorderToken
export { isDerefBorderToken }
