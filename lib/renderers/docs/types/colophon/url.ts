import Token from '../../../../types/token.js'
import DerefToken from '../../../../types/deref.js'
import getColophonEntry from './entry.js'

const getColophonURL = (token: Token | DerefToken, index: string | number = 0): string => {
  const entry = getColophonEntry(token, index)
  return entry?.url ?? ''
}

export default getColophonURL
