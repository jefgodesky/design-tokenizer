import Dimension from '../../../../types/basic/dimension.js'
import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'

const getShadowSpread = (token: DerefShadowToken): Dimension => token.$value.spread

export default getShadowSpread
