import DerefShadowToken from '../../../types/tokens/dereferenced/shadow.js'

const getShadowCSS = (token: DerefShadowToken): string => {
  const { color, offsetX, offsetY, blur, spread } = token.$value
  return `${offsetX} ${offsetY} ${blur} ${spread} ${color}`
}

export default getShadowCSS
