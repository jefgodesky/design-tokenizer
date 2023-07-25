import allUnreservedProps from './guards/all-unreserved-props.js'
import isObject from './guards/object.js'

interface GenericToken<Type, Value> {
  $description?: string
  $type: Type
  $value: Value
  $extensions?: {
    [key: string]: any
  }
  [key: string]: any
}

const isGenericToken = (obj: any): boolean => {
  if (!isObject(obj)) return false
  const { $description, $type, $value, $extensions, ...other } = obj
  if ($value === undefined || $value === null || typeof $value === 'function') return false
  if ($description !== undefined && typeof $description !== 'string') return false
  if ($extensions !== undefined && !isObject($extensions)) return false
  return typeof $type === 'string' && allUnreservedProps(other)
}

export default GenericToken
export { isGenericToken }
