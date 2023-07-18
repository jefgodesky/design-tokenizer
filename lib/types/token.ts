import BorderToken from './tokens/border.js'
import ColorToken from './tokens/color.js'
import CubicBezierToken from './tokens/cubic-bezier.js'
import DimensionToken from './tokens/dimension.js'
import DurationToken from './tokens/duration.js'
import FontFamilyToken from './tokens/font-family.js'
import FontWeightToken from './tokens/font-weight.js'
import GradientToken from './tokens/gradient.js'
import NumberToken from './tokens/number.js'
import ShadowToken from './tokens/shadow.js'
import StrokeStyleToken from './tokens/stroke-style.js'
import TransitionToken from './tokens/transition.js'
import TypographyToken from './tokens/typography.js'

type Token = BorderToken | ColorToken | CubicBezierToken | DimensionToken | DurationToken | FontFamilyToken | FontWeightToken | GradientToken | NumberToken | ShadowToken | StrokeStyleToken | TransitionToken | TypographyToken

export default Token
