type FontFamily = string | string[]

const isFontFamily = (obj: any): boolean => {
  if (typeof obj === 'string') return true
  return Array.isArray(obj) && obj.reduce((acc: boolean, curr: any) => acc && typeof curr === 'string', true)
}

export default FontFamily
export { isFontFamily }
