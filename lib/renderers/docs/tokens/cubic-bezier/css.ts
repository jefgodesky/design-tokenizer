import DerefCubicBezierToken from '../../../../types/tokens/dereferenced/cubic-bezier.js'
import getCubicBezierCSS from '../../../shared/css/cubic-bezier.js'

const getCubicBezierTokenCSS = (token: DerefCubicBezierToken): string => getCubicBezierCSS(token.$value)

export default getCubicBezierTokenCSS
