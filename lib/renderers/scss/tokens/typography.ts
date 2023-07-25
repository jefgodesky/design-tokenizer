import DerefTypographyToken from '../../../types/tokens/dereferenced/typography.js'
import getTypographyCSS from '../../shared/css/typography.js'

const renderTypographyToken = (name: string, token: DerefTypographyToken): string => {
  return [
    `$${name}: ${getTypographyCSS(token)};`,
    `$${name}-letter-spacing: ${token.$value.letterSpacing};`
  ].join('\n')
}

export default renderTypographyToken
