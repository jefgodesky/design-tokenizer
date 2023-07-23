import Extension, { isExtension } from '../types/extension.js'
import Token from '../types/token.js'

const getExtension = (token: Token): Extension | undefined => {
  const domain = 'com.npmjs.package.design-tokenizer'
  const ext = token.$extensions?.[domain]
  return isExtension(ext) ? ext : undefined
}

export default getExtension
