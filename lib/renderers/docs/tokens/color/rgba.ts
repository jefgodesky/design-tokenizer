import DerefColorToken from '../../../../types/tokens/dereferenced/color.js'
import getRGBA from '../../types/color/rgba.js'

const getColorRGBA = (token: DerefColorToken): string => getRGBA(token.$value)

export default getColorRGBA
