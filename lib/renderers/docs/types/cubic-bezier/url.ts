import CubicBezier from '../../../../types/basic/cubic-bezier.js'

const getCubicBezierURL = (curve: CubicBezier): string => {
  const protocol = 'https'
  const domain = 'cubic-bezier.com'
  return `${protocol}://${domain}/#${curve.join(',')}`
}

export default getCubicBezierURL
