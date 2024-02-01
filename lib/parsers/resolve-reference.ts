import Value, { isValue } from '../types/value.js'
import { isReference } from '../types/basic/reference.js'

const resolveReference = (dictionary: any, ref: string): Value | null => {
  const key = ref.substring(1, ref.length - 1)
  const token = dictionary[key]
  const value = token.$value
  return isReference(value)
    ? resolveReference(dictionary, value as string)
    : isValue(value)
      ? value
      : null
}

export default resolveReference
