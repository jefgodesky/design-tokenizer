import Token from '../../types/token.js'
import DerefToken from '../../types/deref.js'
import getExtension from '../extension.js'

const getSCSSVariable = (token: Token | DerefToken): string => {
  const ext = getExtension(token)
  if (ext?.scss === undefined) return ''
  const { variable, module } = ext?.scss
  return module === undefined ? `$${variable}` : `${module}.$${variable}`
}

export default getSCSSVariable
