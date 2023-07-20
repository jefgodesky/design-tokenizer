import DerefBorderToken from '../../../types/tokens/dereferenced/border.js'
import transformDashArray from '../transformers/dash-array.js'

const renderBorderToken = (name: string, token: DerefBorderToken): string => {
  const { color, width, style } = token.$value
  if (typeof style === 'string') return `$${name}: ${width} ${style} ${color};`
  const vars = [
    `$${name}: ${width} dashed ${color};`,
    `$${name}-dash-array: ${transformDashArray(style.dashArray)};`,
    `$${name}-line-cap: ${style.lineCap};`
  ]
  return vars.join('\n')
}

export default renderBorderToken
