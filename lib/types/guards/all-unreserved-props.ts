import isUnreservedName from './unreserved-name.js'

const allUnreservedProps = (obj: any): boolean => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return false
  return Object.keys(obj).reduce((acc: boolean, curr: string) => acc && isUnreservedName(curr), true)
}

export default allUnreservedProps
