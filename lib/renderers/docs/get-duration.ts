import DerefDurationToken from '../../types/tokens/dereferenced/duration.js'

const getDuration = (token: DerefDurationToken): string => token.$value

export default getDuration
