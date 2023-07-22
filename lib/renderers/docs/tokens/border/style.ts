import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'
import getStyle from '../../types/stroke-style/style.js'

const getBorderStyle = (token: DerefBorderToken): string => getStyle(token.$value.style)

export default getBorderStyle
