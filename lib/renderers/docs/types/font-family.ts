interface FontFamilyDoc {
  name: string
  designer: string
  url: string
}

const isFontFamilyDoc = (obj: any): obj is FontFamilyDoc => {
  if (typeof obj !== 'object' || obj === null) return false
  const { name, designer, url } = obj
  return [name, designer, url].reduce((acc: boolean, curr: any) => {
    return acc && curr !== undefined && typeof curr === 'string'
  }, true)
}

export default FontFamilyDoc
export { isFontFamilyDoc }
