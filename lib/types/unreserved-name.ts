const isUnreservedName = (candidate: any): boolean => {
  if (typeof candidate !== 'string' || candidate.startsWith('$')) return false
  return '{.}'.split('').reduce((acc: boolean, curr: string) => acc && !candidate.includes(curr), true)
}

export { isUnreservedName }
