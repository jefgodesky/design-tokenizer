import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getAbsoluteLineHeight from '../../../shared/line-height-absolute.js'

const getTypographyAbsoluteLineHeight = (token: DerefTypographyToken): string => getAbsoluteLineHeight(token)

export default getTypographyAbsoluteLineHeight
