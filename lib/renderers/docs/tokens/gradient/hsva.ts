import DerefGradientToken from '../../../../types/tokens/dereferenced/gradient.js'
import getHSVA from '../../types/color/hsva.js'

const getGradientHSVA = (token: DerefGradientToken, index: number = 0): string => getHSVA(token.$value[index].color)

export default getGradientHSVA
