import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getDashArray from '../../types/stroke-style/dash-array.js'

const getBorderStyleDashArray = (token: DerefBorderToken): string => getDashArray(token.$value.style)

export default getBorderStyleDashArray
