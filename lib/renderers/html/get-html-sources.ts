import { readdirSync } from 'fs'
import { join } from 'path'

const getHTMLSources = (dir: string): string[] => {
  const entries = readdirSync(dir, { withFileTypes: true })
  const subdirs = entries.filter(entry => entry.isDirectory()).map(entry => join(dir, entry.name))
  let html = entries.filter(entry => entry.isFile() && /.*\.html?/i.test(entry.name)).map(entry => join(dir, entry.name))
  for (const subdir of subdirs) html = [...html, ...getHTMLSources(subdir)]
  return html
}

export default getHTMLSources
