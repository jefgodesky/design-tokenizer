import isObject from './guards/object.js'

interface ColophonEntry {
  name: string
  designer: string
  url: string
}

const isColophonEntry = (obj: any): obj is ColophonEntry => {
  if (!isObject(obj)) return false
  const { name, designer, url } = obj
  return [name, designer, url].reduce((acc: boolean, curr: any) => acc && typeof curr === 'string', true)
}

export default ColophonEntry
export { isColophonEntry }
