import DerefBorderToken from '../../../types/tokens/dereferenced/border.js'

const getBorderCSS = (token: DerefBorderToken): string => {
  const { color, width, style } = token.$value
  const s = typeof style === 'string' ? style : 'dashed'
  return `${width} ${s} ${color}`
}

export default getBorderCSS
