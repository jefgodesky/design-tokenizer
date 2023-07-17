import ColorHex from '../../basic/color-hex.js'
import ColorToken, { isColorToken } from '../color.js'
import { isReference } from '../../basic/reference.js'

interface DerefColorToken extends Omit<ColorToken, '$value'> {
  $value: ColorHex
}

const isDerefColorToken = (obj: any): obj is DerefColorToken => {
  if (!isColorToken(obj)) return false
  return !isReference(obj.$value)
}

export default DerefColorToken
export { isDerefColorToken }
