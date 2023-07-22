import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'
import getRGBA from '../../types/color/rgba.js'

const getShadowRGBA = (token: DerefShadowToken): string => getRGBA(token.$value.color)

export default getShadowRGBA
