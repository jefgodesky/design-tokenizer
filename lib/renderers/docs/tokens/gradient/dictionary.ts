import rfdc from 'rfdc'
import DerefGradientToken from '../../../../types/tokens/dereferenced/gradient.js'
import Dictionary from '../../../../types/dictionary.js'

import getSCSSVariable from '../../scss.js'
import getGradientCSS from '../../../shared/css/gradient.js'
import getGradientHex from './hex.js'
import getGradientRGBA from './rgba.js'
import getGradientCMYKA from './cmyka.js'
import getGradientHSLA from './hsla.js'
import getGradientHSVA from './hsva.js'
import getGradientPosition from './position.js'

const clone = rfdc()

const addGradientToDictionary = (name: string, token: DerefGradientToken, dict: Dictionary): Dictionary => {
  const cpy = clone(dict)

  const { $description } = token
  if ($description !== undefined) cpy[name + '.description'] = $description

  const scss = getSCSSVariable(token)
  if (scss.length > 0) cpy[name + '.scss'] = scss

  for (let i = 0; i < token.$value.length; i++) {
    const clr = [name, i, 'color'].join('.')
    const pos = [name, i, 'position'].join('.')

    cpy[clr + '.hex'] = getGradientHex(token, i)
    cpy[clr + '.rgba'] = getGradientRGBA(token, i)
    cpy[clr + '.cmyka'] = getGradientCMYKA(token, i)
    cpy[clr + '.hsla'] = getGradientHSLA(token, i)
    cpy[clr + '.hsva'] = getGradientHSVA(token, i)
    cpy[pos] = getGradientPosition(token, i)
    cpy[pos + '.percent'] = `${token.$value[i].position * 100}%`
  }

  cpy[name + '.css'] = getGradientCSS(token)

  return cpy
}

export default addGradientToDictionary
