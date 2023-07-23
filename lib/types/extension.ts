import Colophon, { isColophon } from './colophon.js'
import isObject from './guards/object.js'

interface Extension {
  scss?: {
    file: string
    variable: string
    module?: string
  }
  colophon?: Colophon
}

const isExtension = (obj: any): obj is Extension => {
  if (!isObject(obj)) return false
  const props = ['scss', 'colophon']
  const { scss, colophon } = obj
  if (Object.keys(obj).filter(key => !props.includes(key)).length > 0) return false
  if (scss !== undefined && (!isObject(scss) || typeof scss.file !== 'string' || typeof scss.variable !== 'string')) return false
  if (scss?.module !== undefined && typeof scss?.module !== 'string') return false
  if (colophon !== undefined && !isColophon(colophon)) return false
  return true
}

export default Extension
export { isExtension }
