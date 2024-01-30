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
    for (const v of vars) {
      values[v] = dict[key + '.' + v] ?? ''
    }

    let working = template
    for (const [key, value] of Object.entries(values)) {
      working = working.replace(new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g'), value)
    }
    return working
  }).join('')
}

export default renderLoop
