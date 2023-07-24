import DerefShadowToken from '../../../types/tokens/dereferenced/shadow.js'
import getShadowCSS from '../../shared/css/shadow.js'

const renderShadowToken = (name: string, token: DerefShadowToken): string => `$${name}: ${getShadowCSS(token)};`

export default renderShadowToken
