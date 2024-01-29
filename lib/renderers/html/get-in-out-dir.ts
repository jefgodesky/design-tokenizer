import { existsSync } from 'fs'
import { join } from 'path'

const getInOutDir = (ind?: string, outd?: string, base: string = process.cwd()): { indir: string, outdir: string } => {
  const indir = join(base, ind ?? 'src')
  const outdir = join(base, outd ?? 'dest')

  if (!existsSync(indir)) throw new Error(`html: Error producing HTML: input directory ${indir} does not exist.`)
  if (!existsSync(outdir)) throw new Error(`html: Error producing HTML: output directory ${outdir} does not exist.`)

  return { indir, outdir }
}

export default getInOutDir
