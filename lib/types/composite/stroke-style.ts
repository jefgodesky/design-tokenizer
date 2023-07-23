import Dimension, { isDimension } from '../basic/dimension.js'
import Reference, { isReference } from '../basic/reference.js'
import isObject from '../guards/object.js'

interface StrokeStyleObject {
  dashArray: Array<Dimension | Reference>
  lineCap: 'round' | 'butt' | 'square'
}

const isStrokeStyleObject = (obj: any): obj is StrokeStyleObject => {
  if (!isObject(obj)) return false
  const lineCaps = ['round', 'butt', 'square']
  const { dashArray, lineCap } = obj
  if (lineCap === undefined || typeof lineCap !== 'string' || !lineCaps.includes(lineCap)) return false
  if (dashArray === undefined || !Array.isArray(dashArray)) return false
  const checks = dashArray.map(dash => isDimension(dash) || isReference(dash))
  return checks.reduce((acc, curr) => acc && curr, true)
}

export default StrokeStyleObject
export { isStrokeStyleObject }
