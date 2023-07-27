import slugify from 'slugify'
import { colord, extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'
import DerefColorToken from '../../types/tokens/dereferenced/color.js'
import getColorHex from '../docs/tokens/color/hex.js'
import getColorRGBA from '../docs/tokens/color/rgba.js'
import getColorCMYKA from '../docs/tokens/color/cmyka.js'
import getColorHSLA from '../docs/tokens/color/hsla.js'
import getColorHSVA from '../docs/tokens/color/hsva.js'
import getSCSSVariable from '../docs/scss.js'

extend([a11yPlugin])

const getSwatch = (name: string, token: DerefColorToken): string => {
  const slug: string = slugify(name.replaceAll('.', '-'))
  const title: string = token.$description ?? name
  const scss: string = getSCSSVariable(token)
  const c1 = colord(token.$value).contrast('#000000')
  const c2 = colord(token.$value).contrast('#ffffff')
  const foreground = c2 > c1 ? '#ffffff' : '#000000'

  const rows = [
    ['Hex', getColorHex(token)],
    ['RGBA', getColorRGBA(token)],
    ['CMYKA', getColorCMYKA(token)],
    ['HSLA', getColorHSLA(token)],
    ['HSVA', getColorHSVA(token)]
  ]

  if (scss.length > 0) rows.push(['SCSS', scss])
  const body = rows.map(arr => `<tr><th>${arr[0]}</th><td>${arr[1]}</td></tr>`).join('')
  const style = `background-color: ${token.$value}; color: ${foreground};`
  return `<section class="swatch ${slug}" style="${style}"><h4>${title}</h4><table>${body}</table></section>`
}

export default getSwatch
