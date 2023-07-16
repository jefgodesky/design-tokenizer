import Dictionary, { isDictionary } from '../dictionary.js'
import Reference, { isReference } from '../basic/reference.js'
import StrokeStyleString, { isStrokeStyleString } from '../basic/stroke-style.js'
import StrokeStyleObject, { isStrokeStyleObject } from '../composite/stroke-style.js'

interface StrokeStyleToken extends Dictionary {
  $type: 'strokeStyle'
  $value: StrokeStyleString | StrokeStyleObject | Reference
}

const isStrokeStyleToken = (obj: any): obj is StrokeStyleToken => {
  if (!isDictionary(obj)) return false
  const { $type, $value } = obj
  return $type === 'strokeStyle' && (isStrokeStyleString($value) || isStrokeStyleObject($value) || isReference($value))
}

export default StrokeStyleToken
export { isStrokeStyleToken }
