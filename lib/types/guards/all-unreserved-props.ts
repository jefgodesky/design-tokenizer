import isUnreservedName from './unreserved-name.js'
import isObject from './object.js'

const allUnreservedProps = (obj: any): boolean => {
  if (!isObject(obj)) return false
  return Object.keys(obj).reduce((acc: boolean, curr: string) => acc && isUnreservedName(curr), true)
}

export default allUnreservedProps
