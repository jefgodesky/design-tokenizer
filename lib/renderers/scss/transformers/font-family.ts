const transformFontFamily = (orig: string | string[]): string => {
  const generics = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy',
    'system-ui', 'ui-serif', 'ui-sans-serif', 'ui-monospace', 'ui-rounded',
    'emoji', 'math', 'fangsong']
  const wrapped = /"(.*?)"/
  const arr = Array.isArray(orig) ? orig : [orig]
  const wrap = arr.map(family => generics.includes(family) || wrapped.test(family) ? family : `"${family}"`)
  return wrap.join(', ')
}

export default transformFontFamily
