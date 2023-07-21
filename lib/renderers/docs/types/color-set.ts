interface ColorSet {
  [key: string]: number
}

const isColorSet = (obj: any): obj is ColorSet => {
  if (obj === null || Array.isArray(obj)) return false
  return typeof obj === 'object' && Object.keys(obj).reduce((acc: boolean, key: string) => {
    return acc && typeof obj[key] === 'number'
  }, true)
}

const isColorSetType = (obj: any, type: string): boolean => {
  if (!isColorSet(obj)) return false
  const inObj = Object.keys(obj).sort((a, b) => a.localeCompare(b)).join('')
  const required = type.split('').sort((a, b) => a.localeCompare(b)).join('')
  return inObj === required
}

export default ColorSet
export { isColorSet, isColorSetType }
