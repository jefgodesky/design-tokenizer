import DerefStrokeStyleToken from '../../types/tokens/dereferenced/stroke-style.js'

const getStrokeStyle = (token: DerefStrokeStyleToken): string => {
  const { $value } = token
  return typeof $value === 'string' ? $value : 'dashed'
}

export default getStrokeStyle
