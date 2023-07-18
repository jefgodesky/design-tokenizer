import Dimension, { isDimension } from '../../basic/dimension.js'
import StrokeStyleObject, { isStrokeStyleObject } from '../stroke-style.js'

interface DerefStrokeStyleObject extends Omit<StrokeStyleObject, 'dashArray'> {
  dashArray: Dimension[]
}

const isDerefStrokeStyleObject = (obj: any): obj is DerefStrokeStyleObject => {
  if (!isStrokeStyleObject(obj)) return false
  return Array.isArray(obj.dashArray) && obj.dashArray.reduce((acc: boolean, curr: any) => acc && isDimension(curr), true)
}

export default DerefStrokeStyleObject
export { isDerefStrokeStyleObject }
