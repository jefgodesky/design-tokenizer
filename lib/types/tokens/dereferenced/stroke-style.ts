import StrokeStyleString from '../../basic/stroke-style.js'
import StrokeStyleObject from '../../composite/stroke-style.js'
import StrokeStyleToken, { isStrokeStyleToken } from '../stroke-style.js'
import { isReference } from '../../basic/reference.js'

interface DerefStrokeStyleToken extends Omit<StrokeStyleToken, '$value'> {
  $value: StrokeStyleString | StrokeStyleObject
}

const isDerefStrokeStyleToken = (obj: any): obj is DerefStrokeStyleToken => {
  if (!isStrokeStyleToken(obj)) return false
  return !isReference(obj.$value)
}

export default DerefStrokeStyleToken
export { isDerefStrokeStyleToken }
