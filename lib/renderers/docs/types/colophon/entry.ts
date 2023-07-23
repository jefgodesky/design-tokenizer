import Token from '../../../../types/token.js'
import DerefToken from '../../../../types/deref.js'
import ColophonEntry from '../../../../types/colophon-entry.js'
import Colophon, { isColophon } from '../../../../types/colophon.js'
import getExtension from '../../../extension.js'

const getColophonEntry = (token: Token | DerefToken, index: string | number = 0): ColophonEntry | undefined => {
  const ext = getExtension(token)
  if (ext?.colophon === undefined || !isColophon(ext.colophon)) return undefined
  const colophon: Colophon = ext.colophon
  if (typeof index === 'string') return colophon[index]
  const faces = Object.keys(colophon)
  return typeof faces[index] === 'string' ? colophon[faces[index]] : undefined
}

export default getColophonEntry
