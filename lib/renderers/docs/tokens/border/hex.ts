import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getHex from '../../types/color/hex.js'

const getBorderHex = (token: DerefBorderToken): string => getHex(token.$value.color)

export default getBorderHex
