import rfdc from 'rfdc'
import Token from '../types/token.js'
import DerefTokenList from '../types/deref-token-list.js'
import { isReference } from '../types/basic/reference.js'

const clone = rfdc()

const resolveReferences = (dictionary: any, working?: any): DerefTokenList => {
  const cpy = working ?? clone(dictionary)
  for (const key in cpy) {
    const ref = isReference(cpy[key]) ? cpy[key] as string : null
    cpy[key] = ref !== null
      ? clone((dictionary[ref.substring(1, ref.length - 1)] as Token).$value)
      : typeof cpy[key] === 'object' && Object.keys(cpy[key]).length > 0
        ? resolveReferences(dictionary, cpy[key])
        : cpy[key]
  }
  return cpy
}

export default resolveReferences
