import DerefColorToken from '../../../../types/tokens/dereferenced/color.js'
import getHSLA from '../../types/color/hsla.js'

const getColorHSLA = (token: DerefColorToken): string => getHSLA(token.$value)

export default getColorHSLA
