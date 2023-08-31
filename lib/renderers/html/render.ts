import { readdirSync, readFileSync, writeFileSync } from 'fs'
import DerefTokenList from '../../types/deref-token-list.js'
import Dictionary from '../../types/dictionary.js'
import getDictionary from '../docs/dictionary.js'
import getSwatches from './swatches.js'
import getContrastReport from './contrast-report.js'

const renderHTML = (list: DerefTokenList, options: { indir?: string, outdir?: string, add?: Dictionary, verbose?: boolean } = { verbose: true }): void => {
  const { indir, outdir, add, verbose } = options
  const dict = getDictionary(list, add)
  dict.swatches = getSwatches(list)
  dict['color-contrast'] = getContrastReport(list)
  dict['color-contrast.skip-aa'] = getContrastReport(list, { normal: 'aa' }, ['aa'])
  dict['color-contrast.skip-aaa'] = getContrastReport(list, { normal: 'aa' }, ['aaa'])
  dict['color-contrast.skip-table'] = getContrastReport(list, { normal: 'aa' }, ['aa', 'aaa'])
  dict['color-contrast.normal.aa'] = getContrastReport(list, { normal: 'aa' })
  dict['color-contrast.normal.aa.skip-aa'] = getContrastReport(list, { normal: 'aa' }, ['aa'])
  dict['color-contrast.normal.aa.skip-aaa'] = getContrastReport(list, { normal: 'aa' }, ['aaa'])
  dict['color-contrast.normal.aa.skip-table'] = getContrastReport(list, { normal: 'aa' }, ['aa', 'aaa'])
  dict['color-contrast.normal.aaa'] = getContrastReport(list, { normal: 'aaa' })
  dict['color-contrast.normal.aaa.skip-aa'] = getContrastReport(list, { normal: 'aaa' }, ['aa'])
  dict['color-contrast.normal.aaa.skip-aaa'] = getContrastReport(list, { normal: 'aaa' }, ['aaa'])
  dict['color-contrast.normal.aaa.skip-table'] = getContrastReport(list, { normal: 'aaa' }, ['aa', 'aaa'])
  dict['color-contrast.large.aa'] = getContrastReport(list, { large: 'aa' })
  dict['color-contrast.large.aa.skip-aa'] = getContrastReport(list, { large: 'aa' }, ['aa'])
  dict['color-contrast.large.aa.skip-aaa'] = getContrastReport(list, { large: 'aa' }, ['aaa'])
  dict['color-contrast.large.aa.skip-table'] = getContrastReport(list, { large: 'aa' }, ['aa', 'aaa'])
  dict['color-contrast.large.aaa'] = getContrastReport(list, { large: 'aaa' })
  dict['color-contrast.large.aaa.skip-aa'] = getContrastReport(list, { large: 'aaa' }, ['aa'])
  dict['color-contrast.large.aaa.skip-aaa'] = getContrastReport(list, { large: 'aaa' }, ['aaa'])
  dict['color-contrast.large.aaa.skip-table'] = getContrastReport(list, { large: 'aaa' }, ['aa', 'aaa'])

  if (indir === undefined) console.error('html: Error producing HTML: input directory is undefined.')
  if (outdir === undefined) console.error('html: Error producing HTML: output directory is undefined.')
  if (indir === undefined || outdir === undefined) return

  const allFiles = readdirSync(indir, { withFileTypes: true })
  const files = allFiles.filter(file => /.*\.html?/i.test(file.name))

  for (const file of files) {
    let working = readFileSync(`${indir}/${file.name}`, { encoding: 'utf8' })
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

    writeFileSync(`${outdir}/${file.name}`, working, { encoding: 'utf8' })
    if (verbose !== false) console.log(`html: Generating ${outdir}/${file.name}`)
  }
}

export default renderHTML
