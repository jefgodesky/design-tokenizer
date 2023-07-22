import DerefTransitionToken from '../../../../types/tokens/dereferenced/transition.js'

const getTransitionDelay = (token: DerefTransitionToken): string => token.$value.delay

export default getTransitionDelay
