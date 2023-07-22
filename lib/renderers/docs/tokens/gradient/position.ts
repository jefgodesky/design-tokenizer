import DerefGradientToken from '../../../../types/tokens/dereferenced/gradient.js'

const getGradientPosition = (token: DerefGradientToken, index: number = 0): string => `${token.$value[index].position}`

export default getGradientPosition
