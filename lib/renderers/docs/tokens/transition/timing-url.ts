import DerefTransitionToken from '../../../../types/tokens/dereferenced/transition.js'
import getCubicBezierURL from '../../types/cubic-bezier/url.js'

const getTransitionTimingURL = (token: DerefTransitionToken): string => getCubicBezierURL(token.$value.timingFunction)

export default getTransitionTimingURL
