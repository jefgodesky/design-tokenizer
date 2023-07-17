import DerefTypography, { isDerefTypography } from '../../composite/dereferenced/typography.js'
import TypographyToken, { isTypographyToken } from '../typography.js'

interface DerefTypographyToken extends Omit<TypographyToken, '$value'> {
  $value: DerefTypography
}

const isDerefTypographyToken = (obj: any): obj is DerefTypographyToken => {
  if (!isTypographyToken(obj)) return false
  return isDerefTypography(obj.$value)
}

export default DerefTypographyToken
export { isDerefTypographyToken }
