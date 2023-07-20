import DerefDurationToken from '../../../types/tokens/dereferenced/duration.js'

const renderDurationToken = (name: string, token: DerefDurationToken): string => {
  return `$${name}: ${token.$value};`
}

export default renderDurationToken
