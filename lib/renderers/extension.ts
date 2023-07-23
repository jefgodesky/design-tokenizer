import Token from '../types/token.js'
import DerefToken from '../types/deref.js'
import Extension, { isExtension } from '../types/extension.js'

const getExtension = (token: Token | DerefToken): Extension | undefined => {
  const domain = 'com.npmjs.package.design-tokenizer'
  const ext = token.$extensions?.[domain]
  return isExtension(ext) ? ext : undefined
}

export default getExtension
