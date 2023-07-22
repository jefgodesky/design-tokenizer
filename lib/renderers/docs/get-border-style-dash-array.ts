import DerefBorderToken from '../../types/tokens/dereferenced/border.js'
import DerefStrokeStyleToken from '../../types/tokens/dereferenced/stroke-style.js'
import getStrokeStyleDashArray from './get-stroke-style-dash-array.js'

const getBorderStyleDashArray = (token: DerefBorderToken): string => {
  const stroke: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: token.$value.style }
  return getStrokeStyleDashArray(stroke)
}

export default getBorderStyleDashArray
