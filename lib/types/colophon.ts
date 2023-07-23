import isObject from './guards/object.js'

interface Colophon {
  [key: string]: {
    name: string
    designer: string
    url: string
  }
}

const isColophon = (obj: any): obj is Colophon => {
  if (!isObject(obj)) return false
  for (const key in obj) {
    if (!isObject(obj[key])) return false
    const { name, designer, url } = obj[key]
    const check = [name, designer, url].reduce((acc: boolean, curr: any) => acc && typeof curr === 'string', true)
    if (!check) return false
  }
  return true
}

export default Colophon
export { isColophon }
