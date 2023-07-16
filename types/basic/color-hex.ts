type ColorHex = `#${string}`

const isHexit = (obj: any): boolean => {
  if (typeof obj !== 'string') return false
  const valid = '0123456789abcdef'.split('')
  return valid.includes(obj)
}

export default ColorHex
export { isHexit }
