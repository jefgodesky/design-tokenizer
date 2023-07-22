import DerefCubicBezierToken from '../../../../types/tokens/dereferenced/cubic-bezier.js'
import getCubicBezier from '../../types/cubic-bezier/cubic-bezier.js'

const getCubicBezierTokenString = (token: DerefCubicBezierToken): string => getCubicBezier(token.$value)

export default getCubicBezierTokenString
