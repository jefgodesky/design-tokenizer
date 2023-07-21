import DerefFontFamilyToken from '../../types/tokens/dereferenced/font-family.js'

const getFontFamilyValue = (token: DerefFontFamilyToken): string => {
  const { $value } = token
  return Array.isArray($value) ? $value.join(', ') : $value
}

export default getFontFamilyValue
