import rfdc from 'rfdc'
import DerefFontWeightToken from '../../../../types/tokens/dereferenced/font-weight.js'
import Dictionary from '../../../../types/dictionary.js'

import getSCSSVariable from '../../scss.js'
import getFontWeight from './weight.js'

const clone = rfdc()

const addFontWeightTokenToDictionary = (name: string, token: DerefFontWeightToken, dict: Dictionary): Dictionary => {
  const cpy = clone(dict)

  const { $description } = token
  if ($description !== undefined) cpy[name + '.description'] = $description

  const scss = getSCSSVariable(token)
  if (scss.length > 0) cpy[name + '.scss'] = scss

  cpy[name] = getFontWeight(token)

  return cpy
}

export default addFontWeightTokenToDictionary
