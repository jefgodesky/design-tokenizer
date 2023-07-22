import Dimension from '../../../../types/basic/dimension.js'
import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'

const getShadowOffsetY = (token: DerefShadowToken): Dimension => token.$value.offsetY

export default getShadowOffsetY
