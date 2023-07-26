import slugify from 'slugify'
import DerefColorToken from '../../types/tokens/dereferenced/color.js'
import getColorHex from '../docs/tokens/color/hex.js'
import getColorRGBA from '../docs/tokens/color/rgba.js'
import getColorCMYKA from '../docs/tokens/color/cmyka.js'
import getColorHSLA from '../docs/tokens/color/hsla.js'
import getColorHSVA from '../docs/tokens/color/hsva.js'
import getSCSSVariable from '../docs/scss.js'

const getSwatch = (name: string, token: DerefColorToken): string => {
  const slug: string = slugify(name.replaceAll('.', '-'))
  const title: string = token.$description ?? name
  const scss: string = getSCSSVariable(token)

  const rows = [
    ['Hex', getColorHex(token)],
    ['RGBA', getColorRGBA(token)],
    ['CMYKA', getColorCMYKA(token)],
    ['HSLA', getColorHSLA(token)],
    ['HSVA', getColorHSVA(token)]
  ]

  if (scss.length > 0) rows.push(['SCSS', scss])
  const body = rows.map(arr => `<tr><th>${arr[0]}</th><td>${arr[1]}</td></tr>`).join('')
  return `<section class="swatch ${slug}"><h4>${title}</h4><table>${body}</table></section>`
}

export default getSwatch
