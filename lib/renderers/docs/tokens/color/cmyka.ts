import DerefColorToken from '../../../../types/tokens/dereferenced/color.js'
import getCMYKA from '../../types/color/cmyka.js'
const getColorCMYKA = (token: DerefColorToken): string => getCMYKA(token.$value)

export default getColorCMYKA
