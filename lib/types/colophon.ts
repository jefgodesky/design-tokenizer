import ColophonEntry, { isColophonEntry } from './colophon-entry.js'
import isObject from './guards/object.js'

interface Colophon {
  [key: string]: ColophonEntry
}

const isColophon = (obj: any): obj is Colophon => {
  if (!isObject(obj)) return false
  return Object.keys(obj).reduce((acc: boolean, key: string) => acc && isColophonEntry(obj[key]), true)
}

export default Colophon
export { isColophon }
