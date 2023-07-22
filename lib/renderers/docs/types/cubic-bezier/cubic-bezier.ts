import CubicBezier from '../../../../types/basic/cubic-bezier.js'

const getCubicBezier = (curve: CubicBezier): string => curve.join(', ')

export default getCubicBezier
