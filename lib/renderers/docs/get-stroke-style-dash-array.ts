import DerefStrokeStyleToken from '../../types/tokens/dereferenced/stroke-style.js'
import getDashArray from './get-dash-array.js'

const getStrokeStyleDashArray = (token: DerefStrokeStyleToken): string => {
  const { $value } = token
  return typeof $value === 'string' ? $value : getDashArray($value.dashArray)
}

export default getStrokeStyleDashArray
