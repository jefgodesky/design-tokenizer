import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getRGBA from '../../types/color/rgba.js'

const getBorderRGBA = (token: DerefBorderToken): string => getRGBA(token.$value.color)

export default getBorderRGBA
