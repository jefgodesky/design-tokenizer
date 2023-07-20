import DerefNumberToken from '../../../types/tokens/dereferenced/number.js'

const renderNumberToken = (name: string, token: DerefNumberToken): string => {
  return `$${name}: ${token.$value};`
}

export default renderNumberToken
