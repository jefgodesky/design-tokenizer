const isObject = (obj: any): boolean => typeof obj === 'object' && obj !== null && !Array.isArray(obj)

export default isObject
