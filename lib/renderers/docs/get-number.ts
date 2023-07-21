import DerefNumberToken from '../../types/tokens/dereferenced/number.js'

const getNumber = (token: DerefNumberToken): string => `${token.$value}`

export default getNumber
