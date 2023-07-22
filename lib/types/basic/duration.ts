type Duration = `${number}ms`

const isDuration = (obj: any): obj is Duration => {
  if (typeof obj !== 'string') return false
  const regex = /\d+?(\.\d+?)?ms/i
  return regex.test(obj)
}

export default Duration
export { isDuration }
