import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'
import getHSLA from '../../types/color/hsla.js'

const getShadowHSLA = (token: DerefShadowToken): string => getHSLA(token.$value.color)

export default getShadowHSLA
