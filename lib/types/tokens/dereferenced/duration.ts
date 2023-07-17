import Duration from '../../basic/duration.js'
import DurationToken, { isDurationToken } from '../duration.js'
import { isReference } from '../../basic/reference.js'

interface DerefDurationToken extends Omit<DurationToken, '$value'> {
  $value: Duration
}

const isDerefDurationToken = (obj: any): obj is DerefDurationToken => {
  if (!isDurationToken(obj)) return false
  return !isReference(obj.$value)
}

export default DerefDurationToken
export { isDerefDurationToken }
