import Dimension, { isDimension } from '../basic/dimension.js'
import FontFamily, { isFontFamily } from '../basic/font-family.js'
import FontWeight, { isFontWeight } from '../basic/font-weight.js'
import Reference, { isReference } from '../basic/reference.js'
import isObject from '../guards/object.js'

interface Typography {
  fontFamily: FontFamily | Reference
  fontSize: Dimension | Reference
  fontStyle?: 'normal' | 'italic' | 'oblique' | `oblique ${number}deg`
  fontWeight: FontWeight | Reference
  letterSpacing: Dimension | Reference
  lineHeight: number | Reference
}

const isTypography = (obj: any): obj is Typography => {
  if (!isObject(obj)) return false
  const { fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight } = obj
  const acceptedFontStyles = ['normal', 'italic', 'oblique']
  const acceptedObliqueStyle = /oblique (\d+?)deg/i
  if (fontFamily === undefined || !(isFontFamily(fontFamily) || isReference(fontFamily))) return false
  if (fontSize === undefined || !(isDimension(fontSize) || isReference(fontSize))) return false
  if (fontStyle !== undefined && !acceptedFontStyles.includes(fontStyle) && !acceptedObliqueStyle.test(fontStyle)) return false
  if (fontWeight === undefined || !(isFontWeight(fontWeight) || isReference(fontWeight))) return false
  if (letterSpacing === undefined || !(isDimension(letterSpacing) || isReference(letterSpacing))) return false
  if (lineHeight === undefined || !(typeof lineHeight === 'number' || isReference(lineHeight))) return false
  return true
}

export default Typography
export { isTypography }
