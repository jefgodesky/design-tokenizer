import rfdc from 'rfdc'
import DerefDurationToken from '../../../../types/tokens/dereferenced/duration.js'
import Dictionary from '../../../../types/dictionary.js'

import getSCSSVariable from '../../scss.js'
import getDuration from './duration.js'

const clone = rfdc()

const addDurationToDictionary = (name: string, token: DerefDurationToken, dict: Dictionary): Dictionary => {
  const cpy = clone(dict)

  const { $description } = token
  if ($description !== undefined) cpy[name + '.description'] = $description

  const scss = getSCSSVariable(token)
  if (scss.length > 0) cpy[name + '.scss'] = scss

  cpy[name] = getDuration(token)

  return cpy
}

export default addDurationToDictionary
