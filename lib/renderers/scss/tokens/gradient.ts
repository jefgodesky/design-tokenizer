import DerefGradientToken from '../../../types/tokens/dereferenced/gradient.js'

const renderGradientToken = (name: string, token: DerefGradientToken): string => {
  const stops = token.$value.map(stop => `${stop.color} ${stop.position * 100}%`)
  return `$${name}: ${stops.join(', ')};`
}

export default renderGradientToken
