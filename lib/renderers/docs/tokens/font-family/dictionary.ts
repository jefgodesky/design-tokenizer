import rfdc from 'rfdc'
import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'
import Dictionary from '../../../../types/dictionary.js'

import getSCSSVariable from '../../scss.js'
import getFontFamily from '../../types/font-family/font-family.js'
import getFontFamilyTokenCSS from './css.js'
import getFontFamilyKeys from './keys.js'
import getFontFamilyName from './name.js'
import getFontFamilyDesigner from './designer.js'
import getFontFamilyURL from './url.js'

const clone = rfdc()

const addFontFamilyToDictionary = (name: string, token: DerefFontFamilyToken, dict: Dictionary): Dictionary => {
  const cpy = clone(dict)

  const colophon = getFontFamilyKeys(token)
  for (const key of colophon) {
    cpy[[name, key].join('.')] = getFontFamilyName(token, key)
    cpy[[name, key, 'designer'].join('.')] = getFontFamilyDesigner(token, key)
    cpy[[name, key, 'url'].join('.')] = getFontFamilyURL(token, key)
  }

  const { $description } = token
  if ($description !== undefined) cpy[name + '.description'] = $description

  const scss = getSCSSVariable(token)
  if (scss.length > 0) cpy[name + '.scss'] = scss

  cpy[name] = getFontFamily(token.$value)
  cpy[name + '.css'] = getFontFamilyTokenCSS(token)

  return cpy
}

export default addFontFamilyToDictionary
