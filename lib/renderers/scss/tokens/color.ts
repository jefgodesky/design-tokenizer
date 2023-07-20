import DerefColorToken from '../../../types/tokens/dereferenced/color.js'

const renderColorToken = (name: string, token: DerefColorToken): string => {
  return `$${name}: ${token.$value};`
}

export default renderColorToken
