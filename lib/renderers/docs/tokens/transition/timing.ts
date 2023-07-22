import DerefTransitionToken from '../../../../types/tokens/dereferenced/transition.js'
import getCubicBezier from '../../types/cubic-bezier/cubic-bezier.js'

const getTransitionTimingFunction = (token: DerefTransitionToken): string => getCubicBezier(token.$value.timingFunction)

export default getTransitionTimingFunction
