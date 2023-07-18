import GenericToken, { isGenericToken } from '../generic-token.js'
import Reference, { isReference } from '../basic/reference.js'
import Typography, { isTypography } from '../composite/typography.js'

interface TypographyToken extends GenericToken<'typography', Typography | Reference> {}

const isTypographyToken = (obj: any): obj is TypographyToken => {
  if (!isGenericToken(obj)) return false
  return obj.$type === 'typography' && (isTypography(obj.$value) || isReference(obj.$value))
}

export default TypographyToken
export { isTypographyToken }
