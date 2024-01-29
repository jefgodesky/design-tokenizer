import fs from 'fs'
import DerefTokenList from '../../types/deref-token-list.js'
import Dictionary from '../../types/dictionary.js'
import getInOutDir from './get-in-out-dir.js'
import getHTMLSources from './get-html-sources.js'
import getDictionary from '../docs/dictionary.js'
import getSwatches from './swatches.js'
import addContrastReportToDict from './contrast-report-dict.js'
import renderLoops from './loops.js'
import renderSwatches from './swatches-custom.js'

const renderHTML = (list: DerefTokenList, options: { indir?: string, outdir?: string, add?: Dictionary, verbose?: boolean, base?: string } = { verbose: true }): void => {
  try {
    const { indir, outdir } = getInOutDir(options.indir, options.outdir, options.base ?? process.cwd())
    const { add, verbose } = options
    const dict = addContrastReportToDict(getDictionary(list, add), list)
    dict.swatches = getSwatches(list)
    const files = getHTMLSources(indir)
    for (const file of files) {
      let working = fs.readFileSync(file, { encoding: 'utf8' })
      working = renderLoops(list, dict, working)
      for (const key in dict) {
        working = working.replaceAll(`{{ ${key} }}`, dict[key])
        working = renderSwatches(list, working)
      }

      const outpath = file.replace(indir, outdir)
      fs.writeFileSync(outpath, working, { encoding: 'utf8' })
      if (verbose !== false) console.log(`html: Generating ${outdir}/${file}`)
    }
  } catch (err) {
    console.error(err)
  }
}

export default renderHTML
