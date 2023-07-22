type CubicBezier = [number, number, number, number]

const isCubicBezier = (obj: any): obj is CubicBezier => {
  if (!Array.isArray(obj) || obj.length !== 4) return false
  return obj.reduce((acc: boolean, curr) => acc && typeof curr === 'number', true)
}

export default CubicBezier
export { isCubicBezier }
