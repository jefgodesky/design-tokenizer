import DerefShadowToken from '../../../types/tokens/dereferenced/shadow.js'

const renderShadowToken = (name: string, token: DerefShadowToken): string => {
  const { color, offsetX, offsetY, blur, spread } = token.$value
  return `$${name}: ${offsetX} ${offsetY} ${blur} ${spread} ${color};`
}

export default renderShadowToken
