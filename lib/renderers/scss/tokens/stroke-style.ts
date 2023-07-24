import DerefStrokeStyleToken from '../../../types/tokens/dereferenced/stroke-style.js'
import getDashArrayCSS from '../../shared/css/dash-array.js'

const renderStrokeStyleToken = (name: string, token: DerefStrokeStyleToken): string => {
  const { $value } = token
  if (typeof $value === 'string') return `$${name}: ${$value};`
  const { dashArray, lineCap } = $value
  const vars = [
    `$${name}-dash-array: ${getDashArrayCSS(dashArray)};`,
    `$${name}-line-cap: ${lineCap};`
  ]
  return vars.join('\n')
}

export default renderStrokeStyleToken
