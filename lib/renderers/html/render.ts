import fs from 'fs'
import { join } from 'path'
import DerefTokenList from '../../types/deref-token-list.js'
import Dictionary from '../../types/dictionary.js'
import getDictionary from '../docs/dictionary.js'
import getSwatches from './swatches.js'
import addContrastReportToDict from './contrast-report-dict.js'

const renderHTML = (list: DerefTokenList, options: { indir?: string, outdir?: string, add?: Dictionary, verbose?: boolean, base?: string } = { verbose: true }): void => {
  const { add, verbose } = options
  const base: string = options.base ?? process.cwd()
  const indir: string = join(base, options.indir ?? 'src')
  const outdir: string = join(base, options.outdir ?? 'dist')
  const dict = addContrastReportToDict(getDictionary(list, add), list)
  dict.swatches = getSwatches(list)

  if (indir === undefined) console.error('html: Error producing HTML: input directory is undefined.')
  if (outdir === undefined) console.error('html: Error producing HTML: output directory is undefined.')
  if (indir === undefined || outdir === undefined) return

  const allFiles = fs.readdirSync(indir, { withFileTypes: true })
  const files = allFiles.filter(file => /.*\.html?/i.test(file.name))

  for (const file of files) {
    const filename: string = file.name as string
    let working = fs.readFileSync(`${indir}/${filename}`, { encoding: 'utf8' })
    for (const key in dict) {
      working = working.replaceAll(`{{ ${key} }}`, dict[key])

      // Render custom swatch sets
      const regex = /{{ swatches\.(.*?) }}/
      const customSwatches = working.match(new RegExp(regex, 'gm'))?.map(m => m.match(regex))
      if (customSwatches !== undefined && customSwatches !== null) {
        for (const ref of customSwatches) {
          if (ref !== null) working = working.replace(ref[0], getSwatches(list, ref[1]))
        }
      }
    }

    fs.writeFileSync(`${outdir}/${filename}`, working, { encoding: 'utf8' })
    if (verbose !== false) console.log(`html: Generating ${outdir}/${filename}`)
  }
}

export default renderHTML
