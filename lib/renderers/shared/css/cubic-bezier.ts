import CubicBezier from '../../../types/basic/cubic-bezier.js'

const getCubicBezierCSS = (curve: CubicBezier): string => `cubic-bezier(${curve.join(', ')})`

export default getCubicBezierCSS
