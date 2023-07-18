import ColorHex, { isColorHex } from '../basic/color-hex.js'
import GenericToken, { isGenericToken } from '../generic-token.js'
import Reference, { isReference } from '../basic/reference.js'

interface ColorToken extends GenericToken<'color', ColorHex | Reference> {}

const isColorToken = (obj: any): obj is ColorToken => {
  if (!isGenericToken(obj)) return false
  return obj.$type === 'color' && (isColorHex(obj.$value) || isReference(obj.$value))
}

export default ColorToken
export { isColorToken }
