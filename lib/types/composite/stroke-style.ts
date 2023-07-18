import Dimension, { isDimension } from '../basic/dimension.js'

interface StrokeStyleObject {
  dashArray: Dimension[]
  lineCap: 'round' | 'butt' | 'square'
}

const isStrokeStyleObject = (obj: any): obj is StrokeStyleObject => {
  if (obj === null || typeof obj !== 'object') return false
  const lineCaps = ['round', 'butt', 'square']
  const { dashArray, lineCap } = obj
  if (lineCap === undefined || typeof lineCap !== 'string' || !lineCaps.includes(lineCap)) return false
  if (dashArray === undefined || !Array.isArray(dashArray)) return false
  const checks = dashArray.map(dash => isDimension(dash))
  return checks.reduce((acc, curr) => acc && curr, true)
}

export default StrokeStyleObject
export { isStrokeStyleObject }
