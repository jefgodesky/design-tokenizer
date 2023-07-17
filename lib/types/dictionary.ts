import DictionaryKey, { isDictionaryKey } from './dictionary-key.js'
import DictionaryValue, { isDictionaryValue } from './dictionary-value.js'

interface Dictionary {
  [key: DictionaryKey]: DictionaryValue
}

const isDictionary = (obj: any): obj is Dictionary => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return false
  const checks: boolean[] = Object.keys(obj).map(key => isDictionaryKey(key) && isDictionaryValue(obj[key]))
  return checks.reduce((acc, curr) => acc && curr, true)
}

export default Dictionary
export { isDictionary }
