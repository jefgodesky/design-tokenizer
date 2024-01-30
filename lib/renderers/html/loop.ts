import DerefTokenList from '../../types/deref-token-list.js'
import Dictionary from '../../types/dictionary.js'
import getMatchingTokens from '../docs/get-matching-tokens.js'

const renderLoop = (list: DerefTokenList, dict: Dictionary, pattern: string, template: string): string => {
  const tokens = getMatchingTokens(list, pattern)
  return Object.entries(tokens).map(([key, token]) => {
    const vars = ['description', 'scss', 'css', 'hex', 'rgba', 'cmyka', 'hsla',
      'hsva', 'url', 'dash-array', 'line-cap', 'color.hex', 'color.rgba',
      'color.cmyka', 'color.hsla', 'color.hsva', 'width', 'style', 'offset.x',
      'offset.y', 'blur', 'spread', 'duration', 'delay', 'timing',
      'timing.url', 'family', 'size', 'weight', 'spacing.letter',
      'spacing.line', 'spacing.line.abs', 'style']
    const values: { [key: string]: string } = { name: key }
    values.value = list[key].$type === 'cubicBezier'
      ? (list[key].$value as number[]).join(', ')
      : list[key].$type === 'number'
        ? (list[key].$value as number).toString()
        : typeof list[key].$value === 'string'
          ? list[key].$value as string
          : ''
    if (typeof list[key].$value === 'string') values.value = list[key].$value as string
    for (const v of vars) {
      values[v] = dict[key + '.' + v] ?? ''
    }

    // Catching values for special case tokens
    const specialValues: { [key: string]: string } = {
      fontFamily: 'family',
      fontWeight: 'weight'
    }
    if (Object.keys(specialValues).includes(list[key].$type)) {
      values[specialValues[list[key].$type]] = list[key].$value as string
    }

    let working = template
    for (const [key, value] of Object.entries(values)) {
      working = working.replace(new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g'), value)
    }
    return working
  }).join('')
}

export default renderLoop
