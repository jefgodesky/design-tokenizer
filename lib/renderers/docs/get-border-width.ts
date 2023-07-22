import DerefBorderToken from '../../types/tokens/dereferenced/border.js'

const getBorderWidth = (token: DerefBorderToken): string => token.$value.width

export default getBorderWidth
