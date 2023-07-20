import DerefDimensionToken from '../../../types/tokens/dereferenced/dimension.js'

const renderDimensionToken = (name: string, token: DerefDimensionToken): string => {
  return `$${name}: ${token.$value};`
}

export default renderDimensionToken
