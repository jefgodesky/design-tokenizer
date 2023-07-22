import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'
import getHSVA from '../../types/color/hsva.js'

const getShadowHSVA = (token: DerefShadowToken): string => getHSVA(token.$value.color)

export default getShadowHSVA
