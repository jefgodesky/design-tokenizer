import { readdirSync, readFileSync, writeFileSync } from 'fs'
import DerefTokenList from '../../types/deref-token-list.js'
import getDictionary from '../docs/dictionary.js'
import getSwatches from './swatches.js'

const renderHTML = (list: DerefTokenList, indir: string, outdir: string, verbose: boolean = true): void => {
  const dict = getDictionary(list)
  dict.swatches = getSwatches(list)

  const allFiles = readdirSync(indir, { withFileTypes: true })
  const files = allFiles.filter(file => /.*\.html?/i.test(file.name))

  for (const file of files) {
    let working = readFileSync(`${indir}/${file.name}`, { encoding: 'utf8' })
    for (const key in dict) {
      working = working.replaceAll(`{{ ${key} }}`, dict[key])
    }
    writeFileSync(`${outdir}/${file.name}`, working, { encoding: 'utf8' })
    if (verbose) console.log(`html: Generating ${outdir}/${file.name}`)
  }
}

export default renderHTML
