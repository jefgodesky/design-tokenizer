import DerefFontWeightToken from '../../../types/tokens/dereferenced/font-weight.js'

const renderFontWeightToken = (name: string, token: DerefFontWeightToken): string => {
  return `$${name}: ${token.$value};`
}

export default renderFontWeightToken
