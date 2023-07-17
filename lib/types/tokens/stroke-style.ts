import Dictionary, { isDictionary } from '../dictionary.js'
import Reference, { isReference } from '../basic/reference.js'
import StrokeStyleString, { isStrokeStyleString } from '../basic/stroke-style.js'
import StrokeStyleObject, { isStrokeStyleObject } from '../composite/stroke-style.js'

interface StrokeStyleToken extends Dictionary {
  $type: 'strokeStyle'
  $value: StrokeStyleString | StrokeStyleObject | Reference
}

const isStrokeStyleToken = (obj: any): obj is StrokeStyleToken => {
  if (obj === undefined || obj === null) return false
  const { $type, $value, ...dict } = obj
  if (!isDictionary(dict)) return false
  return $type === 'strokeStyle' && (isStrokeStyleString($value) || isStrokeStyleObject($value) || isReference($value))
}

export default StrokeStyleToken
export { isStrokeStyleToken }
