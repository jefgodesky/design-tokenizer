import allUnreservedProps from './all-unreserved-props.js'

const allUnreservedPropsRecursive = (obj: any): boolean => {
  if (!allUnreservedProps(obj)) return false
  return Object.keys(obj).reduce((acc: boolean, curr: string) => {
    return (typeof obj !== 'object' || obj === null || Array.isArray(obj)) || allUnreservedProps(obj[curr])
  }, true)
}

export default allUnreservedPropsRecursive
