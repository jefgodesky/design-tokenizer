import rfdc from 'rfdc'
import DerefShadowToken from '../../../../types/tokens/dereferenced/shadow.js'
import Dictionary from '../../../../types/dictionary.js'

import getSCSSVariable from '../../scss.js'
import getShadowHex from './hex.js'
import getShadowRGBA from './rgba.js'
import getShadowCMYKA from './cmyka.js'
import getShadowHSLA from './hsla.js'
import getShadowHSVA from './hsva.js'
import getShadowOffsetX from './offset-x.js'
import getShadowOffsetY from './offset-y.js'
import getShadowBlur from './blur.js'
import getShadowSpread from './spread.js'
import getShadowCSS from '../../../shared/css/shadow.js'

const clone = rfdc()

const addShadowToDictionary = (name: string, token: DerefShadowToken, dict: Dictionary): Dictionary => {
  const cpy = clone(dict)

  const { $description } = token
  if ($description !== undefined) cpy[name + '.description'] = $description

  const scss = getSCSSVariable(token)
  if (scss.length > 0) cpy[name + '.scss'] = scss

  cpy[name + '.color.hex'] = getShadowHex(token)
  cpy[name + '.color.rgba'] = getShadowRGBA(token)
  cpy[name + '.color.cmyka'] = getShadowCMYKA(token)
  cpy[name + '.color.hsla'] = getShadowHSLA(token)
  cpy[name + '.color.hsva'] = getShadowHSVA(token)
  cpy[name + '.offset.x'] = getShadowOffsetX(token)
  cpy[name + '.offset.y'] = getShadowOffsetY(token)
  cpy[name + '.blur'] = getShadowBlur(token)
  cpy[name + '.spread'] = getShadowSpread(token)
  cpy[name + '.css'] = getShadowCSS(token)

  return cpy
}

export default addShadowToDictionary
