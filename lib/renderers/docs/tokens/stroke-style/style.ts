import DerefStrokeStyleToken from '../../../../types/tokens/dereferenced/stroke-style.js'
import getStyle from '../../types/stroke-style/style.js'

const getStrokeStyle = (token: DerefStrokeStyleToken): string => {
  const { $value } = token
  return getStyle($value)
}

export default getStrokeStyle
