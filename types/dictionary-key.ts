type DictionaryKey = Exclude<string, `$${string}`>

const isDictionaryKey = (obj: any): boolean => {
  return typeof obj === 'string' && !obj.startsWith('$')
}

export default DictionaryKey
export { isDictionaryKey }
