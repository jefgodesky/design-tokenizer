import Dictionary, { isDictionary } from './dictionary.js'

type DictionaryValue = Dictionary | string | number | boolean | DictionaryValue[]

const isDictionaryValue = (obj: any): boolean => {
  const types = ['boolean', 'number', 'string']
  if (types.includes(typeof obj)) return true
  if (isDictionary(obj)) return true
  return Array.isArray(obj) && obj.reduce((acc: boolean, curr: any) => acc && isDictionaryValue(curr), true)
}

export default DictionaryValue
export { isDictionaryValue }
