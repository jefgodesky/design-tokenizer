import DerefGradientToken from '../../../../types/tokens/dereferenced/gradient.js'
import getRGBA from '../../types/color/rgba.js'

const getGradientRGBA = (token: DerefGradientToken, index: number = 0): string => getRGBA(token.$value[index].color)

export default getGradientRGBA
