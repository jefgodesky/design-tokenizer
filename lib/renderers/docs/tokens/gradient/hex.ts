import DerefGradientToken from '../../../../types/tokens/dereferenced/gradient.js'
import getHex from '../../types/color/hex.js'

const getGradientHex = (token: DerefGradientToken, index: number = 0): string => getHex(token.$value[index].color)

export default getGradientHex
