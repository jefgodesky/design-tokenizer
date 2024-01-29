import fs from 'fs'
import DerefTokenList from '../../types/deref-token-list.js'
import Dictionary from '../../types/dictionary.js'
import getInOutDir from './get-in-out-dir.js'
import getDictionary from '../docs/dictionary.js'
import getSwatches from './swatches.js'
import addContrastReportToDict from './contrast-report-dict.js'
import renderSwatches from './swatches-custom.js'

const renderHTML = (list: DerefTokenList, options: { indir?: string, outdir?: string, add?: Dictionary, verbose?: boolean, base?: string } = { verbose: true }): void => {
  try {
    const { indir, outdir } = getInOutDir(options.indir, options.outdir, options.base ?? process.cwd())
    const { add, verbose } = options
    const dict = addContrastReportToDict(getDictionary(list, add), list)
    dict.swatches = getSwatches(list)

    const allFiles = fs.readdirSync(indir, { withFileTypes: true })
    const files = allFiles.filter(file => /.*\.html?/i.test(file.name))

    for (const file of files) {
      const filename: string = file.name
      let working = fs.readFileSync(`${indir}/${filename}`, { encoding: 'utf8' })
      for (const key in dict) {
        working = working.replaceAll(`{{ ${key} }}`, dict[key])
        working = renderSwatches(list, working)
      }

      fs.writeFileSync(`${outdir}/${filename}`, working, { encoding: 'utf8' })
      if (verbose !== false) console.log(`html: Generating ${outdir}/${filename}`)
    }
  } catch (err) {
    console.error(err)
  }
}

export default renderHTML
