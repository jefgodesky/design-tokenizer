import rfdc from 'rfdc'
import DerefDimensionToken from '../../../../types/tokens/dereferenced/dimension.js'
import Dictionary from '../../../../types/dictionary.js'

import getSCSSVariable from '../../scss.js'
import getDimension from './dimension.js'

const clone = rfdc()

const addDimensionToDictionary = (name: string, token: DerefDimensionToken, dict: Dictionary): Dictionary => {
  const cpy = clone(dict)

  const { $description } = token
  if ($description !== undefined) cpy[name + '.description'] = $description

  const scss = getSCSSVariable(token)
  if (scss.length > 0) cpy[name + '.scss'] = scss

  cpy[name] = getDimension(token)

  return cpy
}

export default addDimensionToDictionary
