import ColorHex, { isColorHex } from '../basic/color-hex.js'
import Dictionary, { isDictionary } from '../dictionary.js'
import Reference, { isReference } from '../basic/reference.js'

interface ColorToken extends Dictionary {
  $type: 'color'
  $value: ColorHex | Reference
}

const isColorToken = (obj: any): obj is ColorToken => {
  if (!isDictionary(obj)) return false
  const { $type, $value } = obj
  return $type === 'color' && (isColorHex($value) || isReference($value))
}

export default ColorToken
export { isColorToken }
