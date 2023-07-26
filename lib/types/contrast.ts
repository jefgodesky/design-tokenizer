import DerefColorToken from './tokens/dereferenced/color.js'

interface ContrastCheck {
  a: DerefColorToken
  b: DerefColorToken
  normal: {
    aa: boolean
    aaa: boolean
  }
  large: {
    aa: boolean
    aaa: boolean
  }
}

export default ContrastCheck
