import DerefGradientToken from '../../../../types/tokens/dereferenced/gradient.js'
import getCMYKA from '../../types/color/cmyka.js'

const getGradientCMYKA = (token: DerefGradientToken, index: number = 0): string => getCMYKA(token.$value[index].color)

export default getGradientCMYKA
