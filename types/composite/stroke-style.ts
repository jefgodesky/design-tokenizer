interface StrokeStyleType {
  dashArray: string[]
  lineCap: 'round' | 'butt' | 'square'
}

const isStrokeStyleType = (obj: any): obj is StrokeStyleType => {
  if (obj === null || obj === undefined) return false
  const lineCaps = ['round', 'butt', 'square']
  const { dashArray, lineCap } = obj
  if (lineCap === undefined || !lineCaps.includes(lineCap)) return false
  if (dashArray === undefined || !Array.isArray(dashArray)) return false
  return dashArray.reduce((acc: boolean, curr: any) => acc && typeof curr === 'string', true)
}

export default StrokeStyleType
export { isStrokeStyleType }
