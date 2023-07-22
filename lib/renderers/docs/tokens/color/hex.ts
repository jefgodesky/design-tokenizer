import DerefColorToken from '../../../../types/tokens/dereferenced/color.js'
import getHex from '../../types/color/hex.js'

const getColorHex = (token: DerefColorToken): string => getHex(token.$value)

export default getColorHex
