import CubicBezier from '../../../types/basic/cubic-bezier.js'

const transformCubicBezier = (curve: CubicBezier): string => {
  return `cubic-bezier(${curve.join(', ')})`
}

export default transformCubicBezier
