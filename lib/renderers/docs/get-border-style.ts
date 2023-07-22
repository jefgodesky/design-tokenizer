import DerefBorderToken from '../../types/tokens/dereferenced/border.js'
import DerefStrokeStyleToken from '../../types/tokens/dereferenced/stroke-style.js'
import getStrokeStyle from './get-stroke-style.js'

const getBorderStyle = (token: DerefBorderToken): string => {
  const stroke: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: token.$value.style }
  return getStrokeStyle(stroke)
}

export default getBorderStyle
