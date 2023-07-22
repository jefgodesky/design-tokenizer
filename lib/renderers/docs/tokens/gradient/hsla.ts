import DerefGradientToken from '../../../../types/tokens/dereferenced/gradient.js'
import getHSLA from '../../types/color/hsla.js'

const getGradientHSLA = (token: DerefGradientToken, index: number = 0): string => getHSLA(token.$value[index].color)

export default getGradientHSLA
