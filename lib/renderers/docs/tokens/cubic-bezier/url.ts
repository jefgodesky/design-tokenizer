import DerefCubicBezierToken from '../../../../types/tokens/dereferenced/cubic-bezier.js'
import getCubicBezierURL from '../../types/cubic-bezier/url.js'

const getCubicBezierTokenURL = (token: DerefCubicBezierToken): string => getCubicBezierURL(token.$value)

export default getCubicBezierTokenURL
