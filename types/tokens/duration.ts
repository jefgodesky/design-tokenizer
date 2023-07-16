import Dictionary, { isDictionary } from '../dictionary.js'
import Duration, { isDuration } from '../basic/duration.js'
import Reference, { isReference } from '../basic/reference.js'

interface DurationToken extends Dictionary {
  $type: 'duration'
  $value: Duration | Reference
}

const isDurationToken = (obj: any): obj is DurationToken => {
  if (!isDictionary(obj)) return false
  const { $type, $value } = obj
  return $type === 'duration' && (isDuration($value) || isReference($value))
}

export default DurationToken
export { isDurationToken }
