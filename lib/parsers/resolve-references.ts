import rfdc from 'rfdc'
import { isReference } from '../types/basic/reference.js'
import TokenValueDictionary from '../types/token-value-dictionary.js'
const clone = rfdc()

const resolveReferences = (ref: { [key: string]: any }, working?: { [key: string]: any }): TokenValueDictionary => {
  const cpy = working ?? clone(ref)
  for (const key in cpy) {
    cpy[key] = isReference(cpy[key])
      ? clone(ref[cpy[key].substring(1, cpy[key].length - 1)].$value)
      : typeof cpy[key] === 'object' && Object.keys(cpy[key]).length > 0
        ? resolveReferences(ref, cpy[key])
        : cpy[key]
  }
  return cpy
}

export default resolveReferences
