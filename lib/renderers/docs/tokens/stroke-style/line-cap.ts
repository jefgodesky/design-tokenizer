import DerefStrokeStyleToken from '../../../../types/tokens/dereferenced/stroke-style.js'
import getLineCap from '../../types/stroke-style/line-cap.js'

const getStrokeStyleLineCap = (token: DerefStrokeStyleToken): string => getLineCap(token.$value)

export default getStrokeStyleLineCap
