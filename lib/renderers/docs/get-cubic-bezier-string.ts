import DerefCubicBezierToken from '../../types/tokens/dereferenced/cubic-bezier.js'

const getCubicBezierString = (token: DerefCubicBezierToken): string => `${token.$value.join(', ')}`

export default getCubicBezierString
