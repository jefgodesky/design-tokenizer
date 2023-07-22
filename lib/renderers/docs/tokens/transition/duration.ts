import DerefTransitionToken from '../../../../types/tokens/dereferenced/transition.js'

const getTransitionDuration = (token: DerefTransitionToken): string => token.$value.duration

export default getTransitionDuration
