# Design Tokenizer

![npm](https://img.shields.io/npm/v/design-tokenizer)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/design-tokenizer)

This is a command line translation tool for
design tokens formatted according to the
[W3C Design Tokens Format Module](https://design-tokens.github.io/community-group/format/).

## Getting Started

Add `design-tokenizer` to your project by running:

```
npm i -D design-tokenizer
```

You should now be able to add a script to your
`package.json` like the following:

```json
{
  "name": "your-project",
  "scripts": {
    "tokens": "design-tokenizer --file tokens.json --scss"
  }
}
```

## Command Line Options

### `--file`
**Required**. This option tells design tokenizer
where to find the JSON file with your design
tokens.

### `--scss`
With this option, design tokenizer will look for
options related to SCSS variables in your tokens
(_see_ **Extensions**, below) and create SCSS modules
for the options specified.

### `--html-src` & `--html-dist`
These options only work when you provide both.
With `--html-src`, you can provide a source
directory. Design tokenizer will find every HTML
file in this directory, loop through them, replace
template variables that refer to your tokens with
their actual values, and save the finished files
to the directory specified by `--htm-dist`. For
example, if your tokens include a `color.text`,
then one of your templates in the `--htm-src`
directory could include: `{{ color.text.rgba }}`.
Design tokenizer would make a copy of that
template in `--html-dist` where that has been
replaced with the RGBA value for `color.text`.
_See_ **HTML Variables** below for documentaiton
of the variables you can use.

### `--add-dictionary`
This goes along with the `--html-src` and
`--html-dist` options, allowing you to specify
a JSON file of other values that you'd like to
be able to refer to in your HTML documentation.
This JSON file should _only_ include string
values. So, for example, you shouldn’t pass your
`package.json` here directly; instead, you can
add a small script to run first that would copy
your version, name, description, or any other
values you might like from `package.json` into
a special JSON file that you keep just for this
purpose.

## Extensions
The [W3C Design Tokens Format Module](https://design-tokens.github.io/community-group/format/)
specifies an `$extensions` property that can be
added to any token. Design tokenizer checks the
`com.npmjs.package.design-tokenizer` namespace
for additional information.

### SCSS Instructions

When you create SCSS files (using the `--scss`
option), design tokenizer looks for the `scss`
property in the extensions of each token.

If your tokens include a `color.text` token like
this:

```json
{
  "color.text": {
    "$description": "Text color",
    "$type": "color",
    "$value": "#000000",
    "$extensions": {
      "com.npmjs.package.design-tokenizer": {
        "scss": {
          "file": "path/to/stylesheets/_colors.scss",
          "variable": "text"
        }
      }
    }
  }
}
```

...then when you run...

```
design-tokenizer --file tokens.json --scss
```

...it will create a `path/to/stylesheets/_colors.scss`
with the following contents:

```scss
// path/to/stylesheets/_colors.scss
$text: #000000; // Text color
```

You can then `@use` this in your other SCSS
files to make use of the color values from your
design tokens.

You can also add a `module` property to the
`scss` object. This doesn’t affect the SCSS
that is produced, but it _does_ impact the
HTML documentation. The example above will
replace `{{ color.text.scss }}` with `$text`.
If you were to add `"module": "colors"` to the
`scss` object, it would instead use `colors.$text`.
This may be less confusing for your users if you
provide instructions on how to properly `@use`
your SCSS modules.

### Colophon

You can extend `fontFamily` and `typography`
tokens with information about the typefaces you
use, which are then made available for your
HTML documentation.

You could write a token like this:

```json
{
  "typeface.body": {
    "$description": "Body typeface",
    "$type": "fontFamily",
    "$value": ["Helvetica", "Arial", "sans-serif"],
    "$extensions": {
      "com.npmjs.package.design-tokenizer": {
        "colophon": {
          "helvetica": {
            "name": "Helvetica",
            "designer": "Max Miedinger and Eduard Hoffmann",
            "url": "https://www.linotype.com/1308886/helvetica-family.html"
          },
          "arial": {
            "name": "Arial",
            "designer": "Robin Nicholas and Patricia Saunders",
            "url": "https://www.fonts.com/font/monotype/arial"
          }
        }
      }
    }
  }
}
```

This will allow you to use variables like
`{{ typeface.body.helvetica.designer }}`, which
will be replaced in the HTML documentation you
produce with `Max Miedinger and Eduard Hoffmann`.

## HTML Variables

Design tokenizer can take a set of HTML files
that feature references to your design tokens,
and create a matching set of HTML files in a
separate directory where those references have
been replaced with the values from your tokens.

All of these variables must be surrounded by
double curly braces and spaces to be properly
recognized.

* ❌ `{ color.text }`
* ❌ `{{color.text}}`
* ✅ `{{ color.text }}`

We provide a few special values that you may
find useful in your documentation. In the list
below, we use `VAR` as a stand-in for the name
of your token (the same you would use to refer
to its value from another token). Replace this
with whatever token you’d like to use in each
specific case.

### `{{ VAR }}`

**Token Types:** Cubic bézier, dimension,
duration, font weight, and number tokens, as
well as stroke style tokens where the value is
a string.

Provides the token’s `$value`.

### `{{ VAR.description }}`

**Token Types:** All.

This provides the token’s `$description`. If
you ask for this from a token that doesn’t have
a `$description`, the reference will remain
unchanged in the output HTML.

### `{{ VAR.scss }}`

**Token Types:** All.

This provides the SCSS variable that this token
is saved to, if it has those options set (_see_
**SCSS Instructions**, above). If
you ask for this from a token that doesn’t have
any SCSS variable options set, the reference
will remain unchanged in the output HTML.

### `{{ VAR.css }}`

**Token Types:** Border, cubic bézier, font
family, gradient, shadow, transition, and
typography tokens.

This variable provides the CSS that this token
would produce.

### `{{ VAR.hex }}`

**Token Types:** Color tokens and the color
property of border, gradient, and shadow tokens.

This variable provides the hexadecimal
value for the color.

### `{{ VAR.rgba }}`

**Token Types:** Color tokens and the color
property of border, gradient, and shadow tokens.

This variable provides the RGBA (red, green,
blue, and alpha) value for the color. The red,
green, and blue values are on a scale from 0 to
255, while alpha is on a scale from 0 to 1.

### `{{ VAR.cmyk }}`

**Token Types:** Color tokens and the color
property of border, gradient, and shadow tokens.

This variable provides the CMYK (cyan, magenta,
yellow, black, and alpha) value for the color.
The cyan, magenta, yellow, and black values are
on a scale from 0 to 100, while alpha is on a
scale from 0 to 1.

### `{{ VAR.hsla }}`

**Token Types:** Color tokens and the color
property of border, gradient, and shadow tokens.

This variable provides the HSLA (hue, saturation,
lightness, and alpha) value for the color.
Hue is a degree on the color wheel, between
0° and 360°. Saturation and lightness are both
on a scale from 0 to 100, while alpha is on a
scale from 0 to 1.

### `{{ VAR.hsva }}`

**Token Types:** Color tokens and the color
property of border, gradient, and shadow tokens.

This variable provides the HSVA (hue, saturation,
value, and alpha) value for the color.
Hue is a degree on the color wheel, between
0° and 360°. Saturation and value are both
on a scale from 0 to 100, while alpha is on a
scale from 0 to 1.

### `{{ VAR.url }}`

**Token Types:** Cubic bézier tokens.

This provides a link to [cubic-bezier.com](https://cubic-bezier.com/)
that illustrates what this bézier curve looks like.

### `{{ VAR.TYPEFACE }}`

**Token Types:** Font family and typography tokens.

This provides the name of a typeface from the
colophon options in the token’s extension (_see_
**Colophon**, above). The `TYPEFACE` refers to
the key used in the extension to identify each
typeface in the colohpon. For example, in the
example above, this would be
`{{ typeface.body.helvetica }}`.

### `{{ VAR.TYPEFACE.designer }}`

**Token Types:** Font family and typography tokens.

This provides the designer (or designers) of a
typeface from the colophon options in the
token’s extension (_see_ **Colophon**, above).
The `TYPEFACE` refers to the key used in the
extension to identify each typeface in the
colohpon. For example, in the  example above,
this would be
`{{ typeface.body.helvetica.designer }}`.

### `{{ VAR.TYPEFACE.url }}`

**Token Types:** Font family and typography tokens.

This provides a URL where one could purchase or
learn more about a typeface from the colophon
options in the token’s extension
(_see_ **Colophon**, above). The `TYPEFACE`
refers to the key used in the extension to
identify each typeface in the colohpon. For
example, in the  example above, this would be
`{{ typeface.body.helvetica.url }}`.

### `{{ VAR.dash-array }}`

**Token Types:** Stroke style tokens and border
style properties that use an object.

This provides the dash array for a stroke style.

### `{{ VAR.line-cap }}`

**Token Types:** Stroke style tokens and border
style properties that use an object.

This provides the line cap for a stroke style.

### `{{ VAR.color.X }}`

**Token Types:** Border and shadow tokens.

This provides access to the color properties of
border and shadow tokens. Replace `X` with
`hex`, `rgba`, `cmyka`, `hsla`, or `hsva` for
whichever format you’re looking for.

### `{{ VAR.width }}`

**Token Types:** Border tokens.

This provides the border’s width.

### `{{ VAR.style }}`

**Token Types:** Border tokens.

If the border has a string for its `style`
property, this variable will provide it. If
it uses an object, this will be `dashed`.
`{{ VAR.style.dash-array }}` and
`{{ VAR.style.line-cap }}` are the variables
you’ll need to document a custom border style.

### `{{ VAR.offset.x }}`

**Token Types:** Shadow tokens.

This variable provides the `offsetX` property
from the shadow token’s `$value`.

### `{{ VAR.offset.y }}`

**Token Types:** Shadow tokens.

This variable provides the `offsetY` property
from the shadow token’s `$value`.

### `{{ VAR.blur }}`

**Token Types:** Shadow tokens.

This variable provides the `blur` property
from the shadow token’s `$value`.

### `{{ VAR.spread }}`

**Token Types:** Shadow tokens.

This variable provides the `spread` property
from the shadow token’s `$value`.

### `{{ VAR.duration }}`

**Token Types:** Transition tokens.

This variable provides the `duration` property
from the transition token’s `$value`.

### `{{ VAR.delay }}`

**Token Types:** Transition tokens.

This variable provides the `delay` property
from the transition token’s `$value`.

### `{{ VAR.timing }}`

**Token Types:** Transition tokens.

This variable provides the `timingFunction`
property from the transition token’s `$value`.

### `{{ VAR.timing.url }}`

**Token Types:** Transition tokens.

Like the `{{ VAR.url }}` variable for cubic
bézier tokens, this provides a link to
[cubic-bezier.com](https://cubic-bezier.com/)
that illustrates the transition token’s
timing function.

### `{{ VAR.family }}`

**Token Types:** Typography tokens.

This variable provides the font family from a
typography token as a comma-separated list.

### `{{ VAR.size }}`

**Token Types:** Typography tokens.

This variable provides the font size from a
typography token.

### `{{ VAR.weight }}`

**Token Types:** Typography tokens.

This variable provides the font weight from a
typography token.

### `{{ VAR.spacing.letter }}`

**Token Types:** Typography tokens.

This variable provides the letter spacing from
a typography token.

### `{{ VAR.spacing.line }}`

**Token Types:** Typography tokens.

This variable provides the line height from
a typography token. This is saved as a number,
reflecting the ratio between the line height
and the font size (e.g., `1.2`, not `1.2rem`).
For what this is in absolute terms (with units
attached), use `{{ VAR.spacing.line.abs }}`.

### `{{ VAR.spacing.line.abs }}`

**Token Types:** Typography tokens.

This variable provides the line height from
a typography token in absolute terms. The token
recors this as a number, reflecting the ratio
between the line height and the font size
(e.g., `1.2`, not `1.2rem`). This variable
multiplies that number by the font size to
derive the absolute line height (e.g., `1.2rem`,
instead of `1.2`). For the original ratio, use
`{{ VAR.spacing.line }}`.

### `{{ VAR.style }}`

**Token Types:** Typography tokens.

This variable provides the font style from
a typography token.

### `{{ swatches }}`

**Token Types:** N/A

This is a special variable that will be
replaced with a set of swatches made for all of
the color tokens found in your source file.

### Gradients

Since gradients use an array of objects to
save their stops, you can access them using
their indices (e.g. `gradient.0` or `gradient.1`).
You can use `position` (e.g., `gradient.0.position`
or `gradient.1.position`) to get their positions,
or any of the color options above (`hex`, `rgba`,
`cmyka`, `hsla`, or `hsva`) to access their
colors (e.g., `gradient.0.color.hex` or
`gradient.1.color.rgba`).