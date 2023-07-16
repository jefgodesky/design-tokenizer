interface Dictionary {
  [key: string]: Dictionary | string | number | boolean | Dictionary[] | string[] | number[] | boolean[]
}

const isDictionaryValue = (obj: any): boolean => {
  const accepted = ['string', 'number', 'boolean']
  if (accepted.includes(typeof obj)) return true
  if (isDictionary(obj)) return true
  if (Array.isArray(obj)) return obj.reduce((acc: boolean, curr) => acc && isDictionaryValue(curr), true)
  return false
}

const isDictionary = (obj: any): obj is Dictionary => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return false
  return Object.keys(obj).reduce((acc, curr) => acc && isDictionaryValue(obj[curr]), true)
}

export default Dictionary
export { isDictionary, isDictionaryValue }
