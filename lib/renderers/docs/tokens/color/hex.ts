import ColorHex from '../../../../types/basic/color-hex.js'
import DerefColorToken from '../../../../types/tokens/dereferenced/color.js'

const getColorHex = (token: DerefColorToken): ColorHex => token.$value

export default getColorHex
