import DerefStrokeStyleToken from '../../types/tokens/dereferenced/stroke-style.js'

const getStrokeStyleLineCap = (token: DerefStrokeStyleToken): string => {
  const { $value } = token
  return typeof $value === 'string' ? $value : $value.lineCap
}

export default getStrokeStyleLineCap
