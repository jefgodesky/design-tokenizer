import GenericToken, { isGenericToken } from '../generic-token.js'
import Reference, { isReference } from '../basic/reference.js'
import StrokeStyleString, { isStrokeStyleString } from '../basic/stroke-style.js'
import StrokeStyleObject, { isStrokeStyleObject } from '../composite/stroke-style.js'

interface StrokeStyleToken extends GenericToken<'strokeStyle', StrokeStyleString | StrokeStyleObject | Reference> {}

const isStrokeStyleToken = (obj: any): obj is StrokeStyleToken => {
  if (!isGenericToken(obj)) return false
  return obj.$type === 'strokeStyle' && (isStrokeStyleString(obj.$value) || isStrokeStyleObject(obj.$value) || isReference(obj.$value))
}

export default StrokeStyleToken
export { isStrokeStyleToken }
