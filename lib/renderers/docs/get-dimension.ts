import DerefDimensionToken from '../../types/tokens/dereferenced/dimension.js'

const getDimension = (token: DerefDimensionToken): string => token.$value

export default getDimension
