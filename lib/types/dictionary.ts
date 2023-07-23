import isObject from './guards/object.js'

interface Dictionary {
  [key: string]: string
}

const isDictionary = (obj: any): obj is Dictionary => {
  if (!isObject(obj)) return false
  return Object.keys(obj).reduce((acc: boolean, key: string) => acc && typeof obj[key] === 'string', true)
}

export default Dictionary
export { isDictionary }
