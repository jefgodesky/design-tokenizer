import rfdc from 'rfdc'
import Dictionary from '../types/dictionary.js'

const clone = rfdc()

const getValues = (dict: any, path: string[] = []): Dictionary => {
  let values: Dictionary = {}
  if (dict.$value !== undefined) { values[path.join('.')] = clone(dict); return values }
  for (const key in dict) {
    const children = getValues(dict[key], [...path, key])
    values = { ...values, ...children }
  }
  return values
}

export default getValues
