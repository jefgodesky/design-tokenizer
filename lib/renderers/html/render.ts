import { readdirSync, readFileSync, writeFileSync } from 'fs'
import DerefTokenList from '../../types/deref-token-list.js'
import Dictionary from '../../types/dictionary.js'
import getDictionary from '../docs/dictionary.js'
import getSwatches from './swatches.js'

const renderHTML = (list: DerefTokenList, options: { indir?: string, outdir?: string, add?: Dictionary, verbose?: boolean } = { verbose: true }): void => {
  const { indir, outdir, add, verbose } = options
  const dict = getDictionary(list, add)
  dict.swatches = getSwatches(list)

  if (indir === undefined) console.error('html: Error producing HTML: input directory is undefined.')
  if (outdir === undefined) console.error('html: Error producing HTML: output directory is undefined.')
  if (indir === undefined || outdir === undefined) return

  const allFiles = readdirSync(indir, { withFileTypes: true })
  const files = allFiles.filter(file => /.*\.html?/i.test(file.name))

  for (const file of files) {
    let working = readFileSync(`${indir}/${file.name}`, { encoding: 'utf8' })
    for (const key in dict) {
      working = working.replaceAll(`{{ ${key} }}`, dict[key])
    }
    writeFileSync(`${outdir}/${file.name}`, working, { encoding: 'utf8' })
    if (verbose !== false) console.log(`html: Generating ${outdir}/${file.name}`)
  }
}

export default renderHTML
