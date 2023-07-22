import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getHSLA from '../../types/color/hsla.js'

const getBorderHSLA = (token: DerefBorderToken): string => getHSLA(token.$value.color)

export default getBorderHSLA
