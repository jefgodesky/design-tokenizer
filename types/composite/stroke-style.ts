interface StrokeStyleObject {
  dashArray: string[]
  lineCap: 'round' | 'butt' | 'square'
}

const isStrokeStyleObject = (obj: any): obj is StrokeStyleObject => {
  if (obj === null || obj === undefined) return false
  const lineCaps = ['round', 'butt', 'square']
  const { dashArray, lineCap } = obj
  if (lineCap === undefined || !lineCaps.includes(lineCap)) return false
  if (dashArray === undefined || !Array.isArray(dashArray)) return false
  return dashArray.reduce((acc: boolean, curr: any) => acc && typeof curr === 'string', true)
}

export default StrokeStyleObject
export { isStrokeStyleObject }
