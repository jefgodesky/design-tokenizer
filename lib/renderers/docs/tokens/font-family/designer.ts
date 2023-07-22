import DerefFontFamilyToken from '../../../../types/tokens/dereferenced/font-family.js'

const getFontFamilyDesigner = (token: DerefFontFamilyToken, family: string): string | undefined => {
  return token.$extensions?.['com.github.jefgodesky.design-tokenizer']?.[family]?.designer
}

export default getFontFamilyDesigner
