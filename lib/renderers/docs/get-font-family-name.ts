import DerefFontFamilyToken from '../../types/tokens/dereferenced/font-family.js'

const getFontFamilyName = (token: DerefFontFamilyToken, family: string): string | undefined => {
  return token.$extensions?.['com.github.jefgodesky.design-tokenizer']?.[family]?.name
}

export default getFontFamilyName
