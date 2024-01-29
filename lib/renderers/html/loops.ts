import DerefTokenList from '../../types/deref-token-list.js'
import Dictionary from '../docs/dictionary.js'
import renderLoop from './loop.js'

const renderLoops = (list: DerefTokenList, dict: Dictionary, html: string): string => {
  const regex = /{{ for (.*?) }}([\S\s]*?){{ endfor }}/
  const matches = html.match(new RegExp(regex, 'gm'))
  if (matches === null) return html

  for (const match of matches) {
    const [full, pattern, template] = match.match(regex)
    const rendered = renderLoop(list, dict, pattern, template)
    html = html.replace(full, rendered)
  }

  return html
}

export default renderLoops
