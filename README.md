# Design Tokenizer

[![Tests](https://img.shields.io/github/actions/workflow/status/jefgodesky/design-tokenizer/test.yml)](https://github.com/jefgodesky/design-tokenizer/actions/workflows/test.yml)
[![npm version](https://img.shields.io/npm/v/design-tokenizer)](https://www.npmjs.com/package/design-tokenizer)
[![npm downloads](https://badgen.net/npm/dm/design-tokenizer)](https://www.npmjs.com/package/design-tokenizer)
[![License](https://badgen.net/github/license/jefgodesky/design-tokenizer)](https://github.com/jefgodesky/design-tokenizer/blob/master/LICENSE)
[![TS-Standard - TypeScript Standard Style Guide](https://badgen.net/badge/code%20style/ts-standard/blue?icon=typescript)](https://github.com/standard/ts-standard)

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

### `{{ VAR.cmyka }}`

**Token Types:** Color tokens and the color
property of border, gradient, and shadow tokens.

This variable provides the CMYKA (cyan, magenta,
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

### `{{ for PATTERN }}`

You can loop over all the tokens that share
the pattern `PATTERN`, repeating what occurs
between `{{ for PATTERN }}` and `{{ endfor }}`
for each token. For example:

```html
<table>
  <thead>
    <tr>
      <th>Token</th>
      <th>SCSS Variable</th>
    </tr>
  </thead>
  <tbody>
    {{ for color.* }}
    <tr>
      <td>{{ name }}</td>
      <td>{{ scss }}</td>
    </tr>
    {{ endfor }}
  </tbody>
</table>
```

This would create a table of all of the
tokens with names that begin with `color.`,
displaying the name of the token and the
SCSS variable name (_see_ `{{ VAR.scss }}`,
above) for each one.

You can use most of the variables described
above within the `for` loop (dropping the
`VAR.` prefix) to display the corresponding
value for each token. The exceptions are
the `{{ VAR.TYPEFACE }}`and gradient values,
since they don’t really lend themselves to the
repeatable patterns needed for a loop like this.

In addition to those, you also have access to
the `{{ name }}` variable, which provides the
name of the token (which you would otherwise
provide as `VAR`).

You also have access to the `{{ value }}`
variable for several types of tokens, though
what it means will vary by token type.

| Token Type    | `{{ value }}`                                                                |
|---------------|------------------------------------------------------------------------------|
 | `dimension`   | The dimension’s `$value`                                                     |
 | `duration`    | The duration’s `$value`                                                      |
 | `cubicBezier` | The cubic Bézier’s `$value` as a comma-separated string (e.g., `0, 0, 0, 0`) |
 | `fontFamily`  | The font family’s `$value` (also available as `{{ family }}`)                |
 | `fontWeight`  | The font weight's `$value` (also available as `{{ weight }}`)                |
 | `number`      | The number’s `$value`                                                        |


### `{{ swatches }}`

**Token Types:** N/A

This is a special variable that will be
replaced with a set of swatches made for all of
the color tokens found in your source file.

### `{{ swatches.PREFIX }}`

**Token Types:** N/A

This option also presents a set of color swatches,
like `{{ swatches }}`, but with this option you
can also provide a prefix which will limit the
colors included in the set to those that share
that prefix. This allows you to separate various
themes or sets of colors in your design tokens
(e.g., light and dark themes).

### `{{ color-contrast }}`

**Token Types:** N/A

This variable produces a report which compares
each of your color tokens against each other
color token, provides examples of what they
look like as background and foreground colors
for text, and tell you if the combination passes
the WCAG AA and/or AAA criteria for readability.

### `{{ color-contrast.normal.aa }}`

**Token Types:** N/A

This variable acts just like `{{ color-contrast }}`,
except it only shows the combinations that meet
the WCAG AA standard for body text.

### `{{ color-contrast.normal.aaa }}`

**Token Types:** N/A

This variable acts just like `{{ color-contrast }}`,
except it only shows the combinations that meet
the WCAG AAA standard for body text.

### `{{ color-contrast.large.aa }}`

**Token Types:** N/A

This variable acts just like `{{ color-contrast }}`,
except it only shows the combinations that meet
the WCAG AA standard for large text.

### `{{ color-contrast.large.aaa }}`

**Token Types:** N/A

This variable acts just like `{{ color-contrast }}`,
except it only shows the combinations that meet
the WCAG AAA standard for large text.

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

## Roadmap

SCSS and HTML are all I need for my own purposes
(at least for the time being), but I designed
this with future applications in mind. I’ll be
keeping an eye on the [W3C Design Tokens Format Module](https://design-tokens.github.io/community-group/format/)
as it develops and making any necessary changes
I won’t mark this tool as v1 until
the W3C adopts the format module, and then I
intend to keep the major and minor versions in
sync with the format module, so it will always be
easy to tell which version of the format module
any given version of this tool supports.
 
If there are other things you’d like this tool
to do (e.g., render to Markdown files in addition
to HTML, or support other metadata for tokens),
please [submit those ideas as issues on Github](https://github.com/jefgodesky/design-tokenizer/issues)
and mark them with the **enhancement** label.
There are definitely more things that this tool
could do, but implementing every feature one can
imagine is a great way to build terrible software,
so instead we’ll stick to implementing features
only when there are actual use cases for them.