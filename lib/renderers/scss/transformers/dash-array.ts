import Dimension from '../../../types/basic/dimension.js'

const transformDashArray = (arr: Dimension[]): string => {
  return arr.join(' ')
}

export default transformDashArray
