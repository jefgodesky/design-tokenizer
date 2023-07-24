import rfdc from 'rfdc'
import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import Dictionary from '../../../../types/dictionary.js'

import getSCSSVariable from '../../scss.js'
import getBorderHex from './hex.js'
import getBorderRGBA from './rgba.js'
import getBorderCMYKA from './cmyka.js'
import getBorderHSLA from './hsla.js'
import getBorderHSVA from './hsva.js'
import getBorderWidth from './width.js'
import getBorderStyle from './style.js'
import getBorderStyleDashArray from './dash-array.js'
import getBorderStyleLineCap from './line-cap.js'

const clone = rfdc()

const addBorderToDictionary = (name: string, token: DerefBorderToken, dict: Dictionary): Dictionary => {
  const cpy = clone(dict)

  const { $description } = token
  if ($description !== undefined) cpy[name + '.description'] = $description

  const scss = getSCSSVariable(token)
  if (scss.length > 0) cpy[name + '.scss'] = scss

  cpy[name + '.color.hex'] = getBorderHex(token)
  cpy[name + '.color.rgba'] = getBorderRGBA(token)
  cpy[name + '.color.cmyka'] = getBorderCMYKA(token)
  cpy[name + '.color.hsla'] = getBorderHSLA(token)
  cpy[name + '.color.hsva'] = getBorderHSVA(token)
  cpy[name + '.width'] = getBorderWidth(token)
  cpy[name + '.style'] = getBorderStyle(token)

  const { style } = token.$value
  if (typeof style !== 'string') cpy[name + '.style.dash-array'] = getBorderStyleDashArray(token)
  if (typeof style !== 'string') cpy[name + '.style.line-cap'] = getBorderStyleLineCap(token)

  return cpy
}

export default addBorderToDictionary
