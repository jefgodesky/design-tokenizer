const fontWeights = ['thin', 'hairline', 'extra-light', 'ultra-light', 'light',
  'normal', 'regular', 'book', 'medium', 'semi-bold', 'demi-bold', 'bold',
  'extra-bold', 'ultra-bold', 'black', 'heavy', 'extra-black', 'ultra-black']

type FontWeight = number | typeof fontWeights[number]

const isFontWeight = (obj: any): boolean => {
  const type = typeof obj
  const types = ['string', 'number']
  if (!types.includes(type)) return false
  if (type === 'number' && (obj < 1 || obj > 1000)) return false
  if (type === 'string' && !fontWeights.includes(obj)) return false
  return true
}

export default FontWeight
export { isFontWeight, fontWeights }
