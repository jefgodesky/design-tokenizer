import Dimension from '../../../../types/basic/dimension.js'
import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'

const getShadowBlur = (token: DerefShadowToken): Dimension => token.$value.blur

export default getShadowBlur
