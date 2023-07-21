import DerefFontFamilyToken from '../../types/tokens/dereferenced/font-family.js'

const getFontFamilyURL = (token: DerefFontFamilyToken, family: string): string | undefined => {
  return token.$extensions?.['com.github.jefgodesky.design-tokenizer']?.[family]?.url
}

export default getFontFamilyURL
