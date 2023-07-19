import rfdc from 'rfdc'
import Group from '../types/group.js'

const clone = rfdc()

const getTokenList = (obj: { [key: string]: any }, path: string[] = []): Group => {
  let values: Group = {}
  if (obj.$value !== undefined) { values[path.join('.')] = clone(obj); return values }
  for (const key in obj) {
    const children = getTokenList(obj[key], [...path, key])
    values = { ...values, ...children }
  }
  return values
}

export default getTokenList
