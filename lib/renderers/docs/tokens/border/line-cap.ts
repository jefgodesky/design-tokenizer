import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getLineCap from '../../types/stroke-style/line-cap.js'

const getBorderStyleLineCap = (token: DerefBorderToken): string => getLineCap(token.$value.style)

export default getBorderStyleLineCap
