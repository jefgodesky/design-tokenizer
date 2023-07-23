import DerefTypographyToken from '../../../../types/tokens/dereferenced/typography.js'
import getColophonDesigner from '../../types/colophon/designer.js'

const getTypographyDesigner = (token: DerefTypographyToken, family: string): string => getColophonDesigner(token, family)

export default getTypographyDesigner
