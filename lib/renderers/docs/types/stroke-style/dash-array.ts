import Dimension from '../../../../types/basic/dimension.js'

const getDashArray = (arr: Dimension[]): string => `${arr.join(', ')}`

export default getDashArray
