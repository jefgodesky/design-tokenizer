import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getHSVA from '../../types/color/hsva.js'

const getBorderHSVA = (token: DerefBorderToken): string => getHSVA(token.$value.color)

export default getBorderHSVA
