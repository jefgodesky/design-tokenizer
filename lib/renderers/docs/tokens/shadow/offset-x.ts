import Dimension from '../../../../types/basic/dimension.js'
import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'

const getShadowOffsetX = (token: DerefShadowToken): Dimension => token.$value.offsetX

export default getShadowOffsetX
