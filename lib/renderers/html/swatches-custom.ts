import DerefTokenList from '../../types/deref-token-list'
import getSwatches from './swatches'

const renderSwatches = (list: DerefTokenList, html: string): string => {
  let working = html
  const regex = /{{ swatches\.(.*?) }}/
  const customSwatches = html.match(new RegExp(regex, 'gm'))?.map(m => m.match(regex)) ?? null
  if (customSwatches !== null) {
    for (const ref of customSwatches) {
      if (ref !== null) working = working.replace(ref[0], getSwatches(list, ref[1]))
    }
  }
  return working
}

export default renderSwatches
