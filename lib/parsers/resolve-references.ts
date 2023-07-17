import rfdc from 'rfdc'
import Dictionary from '../types/dictionary.js'

const clone = rfdc()

const resolveReferences = (values: Dictionary): Dictionary => {
  const cpy = clone(values)
  const regex = /{(.*?)}/
  for (const key in cpy) {
    const match = typeof cpy[key] === 'string' ? (cpy[key] as string).match(regex) : null
    if (match === null || match.length < 2) continue
    cpy[key] = cpy[match[1]]
  }
  return cpy
}

export default resolveReferences
