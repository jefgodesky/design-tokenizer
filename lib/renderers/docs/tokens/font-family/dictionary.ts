import rfdc from 'rfdc'
import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import Dictionary from '../../../../types/dictionary.js'

import getSCSSVariable from '../../scss.js'
import getFontFamily from '../../types/font-family/font-family.js'
import getColophonKeys from '../../types/colophon/keys.js'
import getColophonName from '../../types/colophon/name.js'
import getColophonDesigner from '../../types/colophon/designer.js'
import getColophonURL from '../../types/colophon/url.js'

const clone = rfdc()

const addFontFamilyokenToDictionary = (name: string, token: DerefFontFamilyToken, dict: Dictionary): Dictionary => {
  const cpy = clone(dict)

  const colophon = getColophonKeys(token)
  for (const key of colophon) {
    cpy[[name, key].join('.')] = getColophonName(token, key)
    cpy[[name, key, 'designer'].join('.')] = getColophonDesigner(token, key)
    cpy[[name, key, 'url'].join('.')] = getColophonURL(token, key)
  }

  const { $description } = token
  if ($description !== undefined) cpy[name + '.description'] = $description

  const scss = getSCSSVariable(token)
  if (scss.length > 0) cpy[name + '.scss'] = scss

  cpy[name] = getFontFamily(token.$value)

  return cpy
}

export default addFontFamilyokenToDictionary
