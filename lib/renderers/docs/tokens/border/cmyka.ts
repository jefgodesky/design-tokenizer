import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getCMYKA from '../../types/color/cmyka.js'

const getBorderCMYKA = (token: DerefBorderToken): string => getCMYKA(token.$value.color)

export default getBorderCMYKA
