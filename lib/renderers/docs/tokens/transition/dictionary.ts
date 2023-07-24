import rfdc from 'rfdc'
import DerefTransitionToken from '../../../../types/tokens/dereferenced/transition.js'
import Dictionary from '../../../../types/dictionary.js'

import getSCSSVariable from '../../scss.js'
import getTransitionDuration from './duration.js'
import getTransitionDelay from './delay.js'
import getTransitionTimingFunction from './timing.js'
import getTransitionTimingURL from './timing-url.js'
import getTransitionCSS from '../../../shared/css/transition.js'

const clone = rfdc()

const addTransitionToDictionary = (name: string, token: DerefTransitionToken, dict: Dictionary): Dictionary => {
  const cpy = clone(dict)

  const { $description } = token
  if ($description !== undefined) cpy[name + '.description'] = $description

  const scss = getSCSSVariable(token)
  if (scss.length > 0) cpy[name + '.scss'] = scss

  cpy[name + '.duration'] = getTransitionDuration(token)
  cpy[name + '.delay'] = getTransitionDelay(token)
  cpy[name + '.timing'] = getTransitionTimingFunction(token)
  cpy[name + '.timing.url'] = getTransitionTimingURL(token)
  cpy[name + '.css'] = getTransitionCSS(token)

  return cpy
}

export default addTransitionToDictionary
