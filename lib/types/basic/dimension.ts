type Unit = 'px' | 'rem'
type Dimension = `${number}${Unit}`

const isDimension = (obj: any): obj is Dimension => {
  if (typeof obj !== 'string') return false
  const regex = /\d+?(\.\d+?)?(rem|px)/i
  return regex.test(obj)
}

export default Dimension
export { isDimension }
