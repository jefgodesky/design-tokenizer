type ColorHex = `#${string}`

const isHexit = (obj: any): boolean => {
  if (typeof obj !== 'string') return false
  const valid = '0123456789abcdef'.split('')
  return valid.includes(obj)
}

const isColorHex = (obj: any): obj is ColorHex => {
  if (typeof obj !== 'string') return false
  const validLengths = [7, 9]
  const chars = obj.split('')
  if (!validLengths.includes(chars.length)) return false
  if (chars[0] !== '#') return false
  return chars.slice(1).reduce((acc, curr) => acc && isHexit(curr), true)
}

export default ColorHex
export { isHexit, isColorHex }
