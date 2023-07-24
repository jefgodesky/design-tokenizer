import DerefGradientToken from '../../../types/tokens/dereferenced/gradient.js'

const getGradientCSS = (token: DerefGradientToken): string => {
  const stops = token.$value.map(stop => `${stop.color} ${stop.position * 100}%`)
  return stops.join(', ')
}

export default getGradientCSS
