import Token from '../../../../types/token.js'
import DerefToken from '../../../../types/deref.js'
import { isColophon } from '../../../../types/colophon.js'
import getExtension from '../../../extension.js'

const getColophonKeys = (token: Token | DerefToken, index: string | number = 0): string[] => {
  const ext = getExtension(token)
  if (ext?.colophon === undefined || !isColophon(ext.colophon)) return []
  return Object.keys(ext.colophon)
}

export default getColophonKeys
