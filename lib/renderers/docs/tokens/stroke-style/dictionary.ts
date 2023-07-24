import rfdc from 'rfdc'
import DerefStrokeStyleToken from '../../../../types/tokens/dereferenced/stroke-style.js'
import Dictionary from '../../../../types/dictionary.js'

import getSCSSVariable from '../../scss.js'
import getStrokeStyleDashArray from './dash-array.js'
import getStrokeStyleLineCap from './line-cap.js'
import getStrokeStyle from './style.js'

const clone = rfdc()

const addStrokeStyleToDictionary = (name: string, token: DerefStrokeStyleToken, dict: Dictionary): Dictionary => {
  const cpy = clone(dict)

  const { $value, $description } = token
  if ($description !== undefined) cpy[name + '.description'] = $description

  const scss = getSCSSVariable(token)
  if (scss.length > 0) cpy[name + '.scss'] = scss

  cpy[name] = getStrokeStyle(token)
  if (typeof $value !== 'string') cpy[name + '.dash-array'] = getStrokeStyleDashArray(token)
  if (typeof $value !== 'string') cpy[name + '.line-cap'] = getStrokeStyleLineCap(token)

  return cpy
}

export default addStrokeStyleToDictionary
