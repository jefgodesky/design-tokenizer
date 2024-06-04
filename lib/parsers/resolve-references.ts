import rfdc from 'rfdc'
import DerefTokenList from '../types/deref-token-list.js'
import { isReference } from '../types/basic/reference.js'
import resolveReference from './resolve-reference.js'

const clone = rfdc()

const resolveObjectReferences = (dictionary: any, obj: any): void => {
  for (const key in obj) {
    if (isReference(obj[key])) obj[key] = resolveReference(dictionary, obj[key] as string)
  }
}

const resolveReferences = (dictionary: any): DerefTokenList => {
  const cpy = clone(dictionary)
  for (const key in cpy) {
    if (isReference(cpy[key].$value)) cpy[key].$value = resolveReference(cpy, cpy[key].$value as string)
    if (Array.isArray(cpy[key].$value)) {
      for (const obj of cpy[key].$value) {
        resolveObjectReferences(cpy, obj)
      }
    } else if (cpy[key].$value instanceof Object) {
      resolveObjectReferences(cpy, cpy[key].$value)
    }
  }
  return cpy
}

export default resolveReferences
