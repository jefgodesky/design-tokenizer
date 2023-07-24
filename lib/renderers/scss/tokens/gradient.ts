import DerefGradientToken from '../../../types/tokens/dereferenced/gradient.js'
import getGradientCSS from '../../shared/css/gradient.js'

const renderGradientToken = (name: string, token: DerefGradientToken): string => `$${name}: ${getGradientCSS(token)};`

export default renderGradientToken
