import Dictionary, { isDictionary } from '../dictionary.js'
import Reference, { isReference } from '../basic/reference.js'
import Typography, { isTypography } from '../composite/typography.js'

interface TypographyToken extends Dictionary {
  $type: 'typography'
  $value: Typography | Reference
}

const isTypographyToken = (obj: any): obj is TypographyToken => {
  if (!isDictionary(obj)) return false
  const { $type, $value } = obj
  return $type === 'typography' && (isTypography($value) || isReference($value))
}

export default TypographyToken
export { isTypographyToken }
