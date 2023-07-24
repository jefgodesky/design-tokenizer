import rfdc from 'rfdc'
import DerefColorToken from '../../../../types/tokens/dereferenced/color.js'
import Dictionary from '../../../../types/dictionary.js'

import getSCSSVariable from '../../scss.js'
import getColorHex from './hex.js'
import getColorRGBA from './rgba.js'
import getColorCMYKA from './cmyka.js'
import getColorHSLA from './hsla.js'
import getColorHSVA from './hsva.js'

const clone = rfdc()

const addColorToDictionary = (name: string, token: DerefColorToken, dict: Dictionary): Dictionary => {
  const cpy = clone(dict)

  const { $description } = token
  if ($description !== undefined) cpy[name + '.description'] = $description

  const scss = getSCSSVariable(token)
  if (scss.length > 0) cpy[name + '.scss'] = scss

  cpy[name + '.hex'] = getColorHex(token)
  cpy[name + '.rgba'] = getColorRGBA(token)
  cpy[name + '.cmyka'] = getColorCMYKA(token)
  cpy[name + '.hsla'] = getColorHSLA(token)
  cpy[name + '.hsva'] = getColorHSVA(token)

  return cpy
}

export default addColorToDictionary
