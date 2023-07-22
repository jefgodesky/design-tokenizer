import DerefBorderToken from '../../types/tokens/dereferenced/border.js'
import DerefStrokeStyleToken from '../../types/tokens/dereferenced/stroke-style.js'
import getStrokeStyleLineCap from './get-stroke-style-line-cap.js'

const getBorderStyleLineCap = (token: DerefBorderToken): string => {
  const stroke: DerefStrokeStyleToken = { $type: 'strokeStyle', $value: token.$value.style }
  return getStrokeStyleLineCap(stroke)
}

export default getBorderStyleLineCap
