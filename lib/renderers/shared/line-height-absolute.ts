import Dimension from '../../types/basic/dimension.js'
import DerefTypographyToken from '../../types/tokens/dereferenced/typography.js'

const getAbsoluteLineHeight = (token: DerefTypographyToken): Dimension => {
  const { fontSize, lineHeight } = token.$value
  const units = fontSize.endsWith('rem') ? 'rem' : 'px'
  const size = parseFloat(fontSize.substring(0, fontSize.indexOf(units)))
  const digits = units === 'rem' ? 2 : 0
  return isNaN(size) ? fontSize : `${(size * lineHeight).toFixed(digits)}${units}` as Dimension
}

export default getAbsoluteLineHeight
