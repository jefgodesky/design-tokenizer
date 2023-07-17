import Dimension, { isDimension } from '../../basic/dimension.js'
import FontFamily, { isFontFamily } from '../../basic/font-family.js'
import FontWeight, { isFontWeight } from '../../basic/font-weight.js'
import Typography, { isTypography } from '../typography.js'

interface DerefTypography extends Omit<Typography, 'fontFamily' | 'fontSize' | 'fontWeight' | 'letterSpacing' | 'lineHeight'> {
  fontFamily: FontFamily
  fontSize: Dimension
  fontWeight: FontWeight
  letterSpacing: Dimension
  lineHeight: number
}

const isDerefTypography = (obj: any): obj is DerefTypography => {
  if (!isTypography(obj)) return false
  const tests = [
    isFontFamily(obj.fontFamily),
    isDimension(obj.fontSize),
    isFontWeight(obj.fontWeight),
    isDimension(obj.letterSpacing),
    typeof obj.lineHeight === 'number'
  ]
  return tests.reduce((acc: boolean, curr: boolean) => acc && curr, true)
}

export default DerefTypography
export { isDerefTypography }
