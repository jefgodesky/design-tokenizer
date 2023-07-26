import { colord, extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'
import ContrastCheck from '../../types/contrast.js'
import DerefTokenList from '../../types/deref-token-list.js'
import getColorPairs from './color-pairs.js'

extend([a11yPlugin])

const getContrastChecks = (list: DerefTokenList): ContrastCheck[] => {
  return getColorPairs(list).map(pair => {
    const a = pair[0]
    const b = pair[1]
    const normal = {
      aa: colord(a.$value).isReadable(b.$value, { level: 'AA', size: 'normal' }),
      aaa: colord(a.$value).isReadable(b.$value, { level: 'AAA', size: 'normal' })
    }
    const large = {
      aa: colord(a.$value).isReadable(b.$value, { level: 'AA', size: 'large' }),
      aaa: colord(a.$value).isReadable(b.$value, { level: 'AAA', size: 'large' })
    }
    return { a, b, normal, large }
  })
}

export default getContrastChecks
