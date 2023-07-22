import DerefBorderToken from '../../../../types/tokens/dereferenced/border.js'

const getBorderColor = (token: DerefBorderToken): string => token.$value.color

export default getBorderColor
