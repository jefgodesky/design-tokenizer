import ColorHex, { isColorHex } from '../basic/color-hex.js'
import Dictionary, { isDictionary } from '../dictionary.js'
import Reference, { isReference } from '../basic/reference.js'

interface ColorToken extends Dictionary {
  $type: 'color'
  $value: ColorHex | Reference
}

const isColorToken = (obj: any): obj is ColorToken => {
  if (obj === undefined || obj === null) return false
  const { $type, $value, ...dict } = obj
  if (!isDictionary(dict)) return false
  return $type === 'color' && (isColorHex($value) || isReference($value))
}

export default ColorToken
export { isColorToken }
