import { readFileSync } from 'fs'
import { program } from 'commander'
import yaml from 'yaml'

import ColorHex from './types/basic/color-hex.js'
import CubicBezier from './types/basic/cubic-bezier.js'
import Dimension from './types/basic/dimension.js'
import Duration from './types/basic/duration.js'
import FontFamily from './types/basic/font-family.js'
import FontWeight from './types/basic/font-weight.js'
import Reference from './types/basic/reference.js'
import StrokeStyleString from './types/basic/stroke-style.js'

import Border from './types/composite/border.js'
import GradientStop from './types/composite/gradient-stop.js'
import Shadow from './types/composite/shadow.js'
import StrokeStyleObject from './types/composite/stroke-style.js'
import Transition from './types/composite/transition.js'
import Typography from './types/composite/typography.js'

import DerefBorder from './types/composite/dereferenced/border.js'
import DerefGradientStop from './types/composite/dereferenced/gradient-stop.js'
import DerefShadow from './types/composite/dereferenced/shadow.js'
import DerefStrokeStyleObject from './types/composite/dereferenced/stroke-style.js'
import DerefTransitionToken from './types/tokens/dereferenced/transition.js'
import DerefTypography from './types/composite/dereferenced/typography.js'

import BorderToken from './types/tokens/border.js'
import ColorToken from './types/tokens/color.js'
import CubicBezierToken from './types/tokens/cubic-bezier.js'
import DimensionToken from './types/tokens/dimension.js'
import DurationToken from './types/tokens/duration.js'
import FontFamilyToken from './types/tokens/font-family.js'
import FontWeightToken from './types/tokens/font-weight.js'
import GradientToken from './types/tokens/gradient.js'
import NumberToken from './types/tokens/number.js'
import ShadowToken from './types/tokens/shadow.js'
import StrokeStyleToken from './types/tokens/stroke-style.js'
import TransitionToken from './types/tokens/transition.js'
import TypographyToken from './types/tokens/typography.js'

import DerefBorderToken from './types/tokens/dereferenced/border.js'
import DerefColorToken from './types/tokens/dereferenced/color.js'
import DerefCubicBezierToken from './types/tokens/dereferenced/cubic-bezier.js'
import DerefDimensionToken from './types/tokens/dereferenced/dimension.js'
import DerefDurationToken from './types/tokens/dereferenced/duration.js'
import DerefFontFamilyToken from './types/tokens/dereferenced/font-family.js'
import DerefFontWeightToken from './types/tokens/dereferenced/font-weight.js'
import DerefGradientToken from './types/tokens/dereferenced/gradient.js'
import DerefNumberToken from './types/tokens/dereferenced/number.js'
import DerefShadowToken from './types/tokens/dereferenced/shadow.js'
import DerefStrokeStyleToken from './types/tokens/dereferenced/stroke-style.js'
import DerefTransition from './types/composite/dereferenced/transition.js'
import DerefTypographyToken from './types/tokens/dereferenced/typography.js'

import Dictionary from './types/dictionary.js'
import Extension from './types/extension.js'
import Colophon from './types/colophon.js'
import ColophonEntry from './types/colophon-entry.js'

import DerefToken from './types/deref.js'
import DerefTokenList from './types/deref-token-list.js'
import GenericToken from './types/generic-token.js'
import Group, { isGroup } from './types/group.js'
import Token from './types/token.js'

import getTokenList from './parsers/get-token-list.js'
import resolveReferences from './parsers/resolve-references.js'

import renderSCSS from './renderers/scss/render.js'

import pkg from '../package.json' assert { type: 'json' }

/**
 * Commander Configuration
 * Get options from the user.
 */

program.name(pkg.name)
  .description(pkg.description)
  .version(pkg.version)
  .option('-f, --file <file>', 'JSON file containing design tokens, formatted per the W3C Design Tokens Format Module.')
  .option('-c, --config <config>', 'YAML configuration specifying what you would like to output.')

try {
  program.parse()
  const options = program.opts()

  const contents = readFileSync(options.file, { encoding: 'utf8' })
  const data = JSON.parse(contents)
  if (!isGroup(data)) throw new TypeError(`The JSON found in ${options.file as string} does not conform to the W3C Design Tokens Format Module.`)
  const dictionary = resolveReferences(getTokenList(data))

  const configuration = readFileSync(options.config, { encoding: 'utf8' })
  const config = yaml.parse(configuration)

  const renderers: { [key: string]: { acknowledgment: string, render: Function } } = {
    scss: { acknowledgment: 'Rendering tokens to SCSS variables...', render: renderSCSS }
  }

  for (const key in config) {
    if (!Object.keys(renderers).includes(key)) {
      console.error(`${key}: We do not have any renderers of type "${key}". Options are: ${Object.keys(renderers).join(', ')}. Skipping "${key}."`)
      continue
    }
    console.log(`${key}: ${renderers[key].acknowledgment}`)
    renderers[key].render(dictionary, config[key])
  }
} catch (err) {
  console.error(err)
}

export {
  ColorHex,
  CubicBezier,
  Dimension,
  Duration,
  FontFamily,
  FontWeight,
  Reference,
  StrokeStyleString,
  Border,
  GradientStop,
  Shadow,
  StrokeStyleObject,
  Transition,
  Typography,
  DerefBorder,
  DerefGradientStop,
  DerefShadow,
  DerefStrokeStyleObject,
  DerefTransitionToken,
  DerefTypography,
  BorderToken,
  ColorToken,
  CubicBezierToken,
  DimensionToken,
  DurationToken,
  FontFamilyToken,
  FontWeightToken,
  GradientToken,
  NumberToken,
  ShadowToken,
  StrokeStyleToken,
  TransitionToken,
  TypographyToken,
  DerefBorderToken,
  DerefColorToken,
  DerefCubicBezierToken,
  DerefDimensionToken,
  DerefDurationToken,
  DerefFontFamilyToken,
  DerefFontWeightToken,
  DerefGradientToken,
  DerefNumberToken,
  DerefShadowToken,
  DerefStrokeStyleToken,
  DerefTransition,
  DerefTypographyToken,
  Dictionary,
  Extension,
  Colophon,
  ColophonEntry,
  DerefToken,
  DerefTokenList,
  GenericToken,
  Group,
  Token
}
