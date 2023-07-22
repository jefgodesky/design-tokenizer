import DerefColorToken from '../../../../types/tokens/dereferenced/color.js'
import getHSVA from '../../types/color/hsva.js'

const getColorHSVA = (token: DerefColorToken): string => getHSVA(token.$value)

export default getColorHSVA
