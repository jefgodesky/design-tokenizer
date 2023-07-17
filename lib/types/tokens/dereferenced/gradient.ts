import GradientStop from '../../composite/gradient-stop.js'
import GradientToken, { isGradientToken } from '../gradient.js'
import { isReference } from '../../basic/reference.js'

interface DerefGradientToken extends Omit<GradientToken, '$value'> {
  $value: GradientStop[]
}

const isDerefGradientToken = (obj: any): obj is DerefGradientToken => {
  if (!isGradientToken(obj)) return false
  return !isReference(obj.$value)
}

export default DerefGradientToken
export { isDerefGradientToken }
