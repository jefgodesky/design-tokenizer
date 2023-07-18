import StrokeStyleString, { isStrokeStyleString } from '../../basic/stroke-style.js'
import DerefStrokeStyleObject, { isDerefStrokeStyleObject } from '../../composite/dereferenced/stroke-style.js'
import StrokeStyleToken, { isStrokeStyleToken } from '../stroke-style.js'

interface DerefStrokeStyleToken extends Omit<StrokeStyleToken, '$value'> {
  $value: StrokeStyleString | DerefStrokeStyleObject
}

const isDerefStrokeStyleToken = (obj: any): obj is DerefStrokeStyleToken => {
  if (!isStrokeStyleToken(obj)) return false
  return isStrokeStyleString(obj.$value) || isDerefStrokeStyleObject(obj.$value)
}

export default DerefStrokeStyleToken
export { isDerefStrokeStyleToken }
