type Reference = `{${string}}`

const isReference = (obj: any): obj is Reference => {
  if (typeof obj !== 'string') return false
  const regex = /{(.*?)}/
  return regex.test(obj)
}

export default Reference
export { isReference }
