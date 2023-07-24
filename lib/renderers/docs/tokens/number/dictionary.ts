import rfdc from 'rfdc'
import DerefNumberToken from '../../../../types/tokens/dereferenced/number.js'
import Dictionary from '../../../../types/dictionary.js'

import getSCSSVariable from '../../scss.js'
import getNumber from './number.js'

const clone = rfdc()

const addNumberToDictionary = (name: string, token: DerefNumberToken, dict: Dictionary): Dictionary => {
  const cpy = clone(dict)

  const { $description } = token
  if ($description !== undefined) cpy[name + '.description'] = $description

  const scss = getSCSSVariable(token)
  if (scss.length > 0) cpy[name + '.scss'] = scss

  cpy[name] = getNumber(token)

  return cpy
}

export default addNumberToDictionary
