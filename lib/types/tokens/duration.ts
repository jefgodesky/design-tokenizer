import Duration, { isDuration } from '../basic/duration.js'
import GenericToken, { isGenericToken } from '../generic-token.js'
import Reference, { isReference } from '../basic/reference.js'

interface DurationToken extends GenericToken<'duration', Duration | Reference> {}

const isDurationToken = (obj: any): obj is DurationToken => {
  if (!isGenericToken(obj)) return false
  return obj.$type === 'duration' && (isDuration(obj.$value) || isReference(obj.$value))
}

export default DurationToken
export { isDurationToken }
