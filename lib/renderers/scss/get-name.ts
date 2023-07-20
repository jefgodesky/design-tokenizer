import slugify from 'slugify'

const getName = (name: string, prefix: { remove?: string, add?: string } = {}): string => {
  const { add, remove } = prefix
  let n = remove !== undefined && name.startsWith(remove) ? name.substring(remove.length) : name
  n = add !== undefined ? add + '.' + n : n
  return slugify(n.replaceAll('.', '-').toLowerCase())
}

export default getName
