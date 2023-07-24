import Dimension from '../../../types/basic/dimension.js'

const getDashArrayCSS = (arr: Dimension[]): string => {
  return arr.join(' ')
}

export default getDashArrayCSS
