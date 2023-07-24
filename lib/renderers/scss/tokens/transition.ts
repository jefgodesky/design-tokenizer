import DerefTransitionToken from '../../../types/tokens/dereferenced/transition.js'
import getTransitionCSS from '../../shared/css/transition.js'

const renderTransitionToken = (name: string, token: DerefTransitionToken): string => `$${name}: ${getTransitionCSS(token)};`

export default renderTransitionToken
