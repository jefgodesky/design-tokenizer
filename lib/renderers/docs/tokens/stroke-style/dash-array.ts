import DerefStrokeStyleToken from '../../../../types/tokens/dereferenced/stroke-style.js'
import getDashArray from '../../types/stroke-style/dash-array.js'

const getStrokeStyleDashArray = (token: DerefStrokeStyleToken): string => getDashArray(token.$value)

export default getStrokeStyleDashArray
