import Token from '../../../../types/token.js'
import DerefToken from '../../../../types/deref.js'
import { isColophon } from '../../../../types/colophon.js'
import getExtension from '../../../extension.js'

const getColophonName = (token: Token | DerefToken, index: number = 0): string => {
  const ext = getExtension(token)
  if (ext?.colophon === undefined || !isColophon(ext.colophon)) return ''
  const faces = Object.keys(ext.colophon)
  return typeof faces[index] === 'string' ? ext.colophon[faces[index]].name : ''
}

export default getColophonName
