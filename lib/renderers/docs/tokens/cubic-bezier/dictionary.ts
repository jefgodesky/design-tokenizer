import rfdc from 'rfdc'
import DerefCubicBezierToken from '../../../../types/tokens/dereferenced/cubic-bezier.js'
import Dictionary from '../../../../types/dictionary.js'

import getSCSSVariable from '../../scss.js'
import getCubicBezierTokenString from './string.js'
import getCubicBezierTokenURL from './url.js'

const clone = rfdc()

const addCubicBezierToDictionary = (name: string, token: DerefCubicBezierToken, dict: Dictionary): Dictionary => {
  const cpy = clone(dict)

  const { $description } = token
  if ($description !== undefined) cpy[name + '.description'] = $description

  const scss = getSCSSVariable(token)
  if (scss.length > 0) cpy[name + '.scss'] = scss

  cpy[name] = getCubicBezierTokenString(token)
  cpy[name + '.url'] = getCubicBezierTokenURL(token)

  return cpy
}

export default addCubicBezierToDictionary
