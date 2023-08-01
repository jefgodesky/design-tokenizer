import DerefTokenList from '../../types/deref-token-list.js'
import getContrastChecks from './contrast.js'

const getContrastReport = (list: DerefTokenList, rating: { normal?: string, large?: string } = {}, skip: string[] = []): string => {
  const skipLower = skip.map(str => str.toLowerCase())
  const skipAA = skipLower.includes('aa')
  const skipAAA = skipLower.includes('aaa')

  const checks = getContrastChecks(list)
    .filter(check => {
      const { normal, large } = rating
      if (large?.toLowerCase() === 'aaa' && !check.large.aaa) return false
      if (large?.toLowerCase() === 'aa' && !check.large.aa) return false
      if (normal?.toLowerCase() === 'aaa' && !check.normal.aaa) return false
      if (normal?.toLowerCase() === 'aa' && !check.normal.aa) return false
      return true
    })
    .map(check => {
      const { a, b, normal, large } = check
      const classes = ['contrast-report']
      if (normal.aa) classes.push('maa')
      if (normal.aaa) classes.push('maaa')
      if (large.aa) classes.push('lgaa')
      if (large.aaa) classes.push('lgaaa')

      const title = `${a.$description as string} &amp; ${b.$description as string}`
      const lipsum = 'Lorem ipsum dolor sit amet&hellip;'
      const x1 = `<div class="example" style="background-color: ${a.$value}; color: ${b.$value};">${lipsum}</div>`
      const x2 = `<div class="example" style="background-color: ${b.$value}; color: ${a.$value};">${lipsum}</div>`

      const maa = normal.aa ? 'Pass' : 'Fail'
      const maaa = normal.aaa ? 'Pass' : 'Fail'
      const lgaa = large.aa ? 'Pass' : 'Fail'
      const lgaaa = large.aaa ? 'Pass' : 'Fail'
      const cmaa = `m aa ${maa.toLocaleLowerCase()}`
      const cmaaa = `m aaa ${maaa.toLocaleLowerCase()}`
      const clgaa = `lg aa ${lgaa.toLocaleLowerCase()}`
      const clgaaa = `lg aaa ${lgaaa.toLocaleLowerCase()}`

      const aa = skipAA ? '' : `<tr><th class="${cmaa}">AA</th><td class="${cmaa}">${maa}</td><th class="${clgaa}">AA</th><td class="${clgaa}">${lgaa}</td></tr>`
      const aaa = skipAAA ? '' : `<tr><th class="${cmaaa}">AAA</th><td class="${cmaaa}">${maaa}</td><th class="${clgaaa}">AAA</th><td class="${clgaaa}">${lgaaa}</td></tr>`
      const table = skipAA && skipAAA ? '' : `<table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody>${aa}${aaa}</tbody></table>`
      return `<section class="${classes.join(' ')}"><h4>${title}</h4>${x1}${x2}${table}</section>`
    })
  return checks.length > 0 ? `<section class="contrast-reports">${checks.join('')}</section>` : ''
}

export default getContrastReport
