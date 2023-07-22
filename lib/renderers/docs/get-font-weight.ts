import DerefFontWeightToken from '../../types/tokens/dereferenced/font-weight.js'

const getFontWeight = (token: DerefFontWeightToken): string => `${token.$value}`

export default getFontWeight
