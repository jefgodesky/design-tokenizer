import Dictionary from '../types/dictionary.js'

const getValues = (dict: any, path: string[] = []): Dictionary => {
  let values: Dictionary = {}
  if (dict.$value !== undefined) { values[path.join('.')] = dict.$value; return values }
  for (const key in dict) {
    const children = getValues(dict[key], [...path, key])
    values = { ...values, ...children }
  }
  return values
}

export default getValues
