import { writeFileSync } from 'fs'
import DerefTokenList from '../../types/deref-token-list.js'
import generateVariables from './generate-variables.js'
import getOthers from '../../get-others.js'

interface RenderSCSSOptions {
  [key: string]: {
    file: string
    prefix?: {
      add?: string
      remove?: string
    }
  }
}

const renderSCSS = (list: DerefTokenList, options: RenderSCSSOptions = {}, verbose: boolean = true): void => {
  const keys = Object.keys(options).filter(key => key !== '*')
  for (const key in options) {
    const { file, prefix } = options[key]
    const l = key === '*' ? getOthers(list, keys) : list
    const contents = generateVariables(l, { prefix: key === '*' ? '' : key, ...prefix })
    writeFileSync(file, contents, { encoding: 'utf8' })
    if (verbose) console.log(`scss: Generating ${file}`)
  }
}

export default renderSCSS
export { RenderSCSSOptions }
