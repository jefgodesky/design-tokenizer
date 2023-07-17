import DerefGradientStop, { isDerefGradientStop } from '../../composite/dereferenced/gradient-stop.js'
import GradientToken, { isGradientToken } from '../gradient.js'

interface DerefGradientToken extends Omit<GradientToken, '$value'> {
  $value: DerefGradientStop[]
}

const isDerefGradientToken = (obj: any): obj is DerefGradientToken => {
  if (!isGradientToken(obj)) return false
  return Array.isArray(obj.$value) && obj.$value.reduce((acc: boolean, curr: any) => acc && isDerefGradientStop(curr), true)
}

export default DerefGradientToken
export { isDerefGradientToken }
