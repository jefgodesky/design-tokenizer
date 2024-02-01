import rfdc from 'rfdc'
import DerefTokenList from '../types/deref-token-list.js'
import { isReference } from '../types/basic/reference.js'
import resolveReference from './resolve-reference.js'

const clone = rfdc()

const resolveReferences = (dictionary: any): DerefTokenList => {
  const cpy = clone(dictionary)
  for (const key in cpy) {
    if (isReference(cpy[key].$value)) cpy[key].$value = resolveReference(cpy, cpy[key].$value as string)
    if (cpy[key].$value instanceof Object) {
      for (const k in cpy[key].$value) {
        if (isReference(cpy[key].$value[k])) cpy[key].$value[k] = resolveReference(cpy, cpy[key].$value[k] as string)
      }
    }
  }
  return cpy
}

export default resolveReferences
