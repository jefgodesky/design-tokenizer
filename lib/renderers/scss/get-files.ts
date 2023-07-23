import DerefTokenList from '../../types/deref-token-list.js'
import getExtension from '../extension.js'
import dedupe from '../../dedupe.js'

const getFiles = (list: DerefTokenList): string[] => {
  const extensions = Object.keys(list).map(key => list[key]).map(token => getExtension(token))
  const allFiles = extensions.map(ext => ext?.scss?.file).filter((file): file is string => file !== undefined)
  return dedupe(allFiles)
}

export default getFiles
