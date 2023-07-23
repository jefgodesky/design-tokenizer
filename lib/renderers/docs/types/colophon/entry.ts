import Token from '../../../../types/token.js'
import DerefToken from '../../../../types/deref.js'
import ColophonEntry from '../../../../types/colophon-entry.js'
import getColophonKeys from './keys.js'
import getExtension from '../../../extension.js'

const getColophonEntry = (token: Token | DerefToken, index: string | number = 0): ColophonEntry | undefined => {
  const ext = getExtension(token)
  const keys = getColophonKeys(token)
  if (typeof index === 'number' && index >= keys.length) return undefined
  if (typeof index === 'string' && !keys.includes(index)) return undefined
  const key = typeof index === 'string' ? index : keys[index]
  return ext?.colophon?.[key]
}

export default getColophonEntry
