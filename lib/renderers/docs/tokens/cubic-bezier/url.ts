import DerefCubicBezierToken from '../../../../types/tokens/dereferenced/cubic-bezier.js'

const getCubicBezierURL = (token: DerefCubicBezierToken): string => {
  const domain = 'https://cubic-bezier.com/'
  return `${domain}#${token.$value.join(',')}`
}

export default getCubicBezierURL
