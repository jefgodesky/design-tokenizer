import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'
import getHex from '../../types/color/hex.js'

const getShadowHex = (token: DerefShadowToken): string => getHex(token.$value.color)

export default getShadowHex
