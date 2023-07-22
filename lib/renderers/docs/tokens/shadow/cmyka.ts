import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'
import getCMYKA from '../../types/color/cmyka.js'

const getShadowCMYKA = (token: DerefShadowToken): string => getCMYKA(token.$value.color)

export default getShadowCMYKA
