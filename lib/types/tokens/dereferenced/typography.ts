import Typography from '../../composite/typography.js'
import TypographyToken, { isTypographyToken } from '../typography.js'
import { isReference } from '../../basic/reference.js'

interface DerefTypographyToken extends Omit<TypographyToken, '$value'> {
  $value: Typography
}

const isDerefTypographyToken = (obj: any): obj is DerefTypographyToken => {
  if (!isTypographyToken(obj)) return false
  return !isReference(obj.$value)
}

export default DerefTypographyToken
export { isDerefTypographyToken }
