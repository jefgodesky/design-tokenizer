import DerefFontFamilyToken from '../../../types/tokens/dereferenced/font-family.js'
import transformFontFamily from '../transformers/font-family.js'

const renderFontFamilyToken = (name: string, token: DerefFontFamilyToken): string => {
  return `$${name}: ${transformFontFamily(token.$value)};`
}

export default renderFontFamilyToken
