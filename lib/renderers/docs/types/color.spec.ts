import { expect } from 'chai'
import { isColorDoc } from './color.js'

describe('isColorDoc', () => {
  const scss = 'color.green'
  const hex = '#008800'
  const rgb = { r: 0, g: 136, b: 0, a: 1 }
  const cmyk = { c: 100, m: 0, y: 100, k: 47, a: 1 }
  const hsl = { h: 120, s: 100, l: 26.7, a: 1 }
  const hsv = { h: 120, s: 100, v: 53.3, a: 1 }

  it('rejects undefined', () => {
    expect(isColorDoc(undefined)).to.equal(false)
  })

  it('rejects null', () => {
    expect(isColorDoc(null)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isColorDoc(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isColorDoc(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isColorDoc(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isColorDoc(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isColorDoc(scss)).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isColorDoc([0, 0, 0])).to.equal(false)
  })

  it('rejects empty objects', () => {
    expect(isColorDoc({})).to.equal(false)
  })

  it('accepts valid objects', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl, hsv })).to.equal(true)
  })

  it('rejects objects without a scss', () => {
    expect(isColorDoc({ hex, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with an undefined scss', () => {
    expect(isColorDoc({ scss: undefined, hex, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a null scss', () => {
    expect(isColorDoc({ scss: null, hex, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a function scss', () => {
    expect(isColorDoc({ scss: () => {}, hex, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a true scss', () => {
    expect(isColorDoc({ scss: true, hex, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a false scss', () => {
    expect(isColorDoc({ scss: false, hex, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a numerical scss', () => {
    expect(isColorDoc({ scss: 1, hex, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with an array scss', () => {
    expect(isColorDoc({ scss: [scss], hex, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a object scss', () => {
    expect(isColorDoc({ scss: { scss }, hex, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with no hex', () => {
    expect(isColorDoc({ scss, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with an undefined hex', () => {
    expect(isColorDoc({ scss, hex: undefined, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a null hex', () => {
    expect(isColorDoc({ scss, hex: null, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a function hex', () => {
    expect(isColorDoc({ scss, hex: () => {}, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a true hex', () => {
    expect(isColorDoc({ scss, hex: true, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a false hex', () => {
    expect(isColorDoc({ scss, hex: false, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a numerical hex', () => {
    expect(isColorDoc({ scss, hex: 0, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a string hex that isn\'t correctly formatted', () => {
    expect(isColorDoc({ scss, hex: 'green', rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('accepts objects with a 24+8 bit RGB hex', () => {
    expect(isColorDoc({ scss, hex: '#008800ff', rgb, cmyk, hsl, hsv })).to.equal(true)
  })

  it('rejects objects with an array hex', () => {
    expect(isColorDoc({ scss, hex: [0, 0, 0], rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with an object hex', () => {
    expect(isColorDoc({ scss, hex: { hex }, rgb, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects no rgb', () => {
    expect(isColorDoc({ scss, hex, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with an undefined rgb', () => {
    expect(isColorDoc({ scss, hex, rgb: undefined, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a null rgb', () => {
    expect(isColorDoc({ scss, hex, rgb: null, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a function rgb', () => {
    expect(isColorDoc({ scss, hex, rgb: () => {}, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a true rgb', () => {
    expect(isColorDoc({ scss, hex, rgb: true, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a false rgb', () => {
    expect(isColorDoc({ scss, hex, rgb: false, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a numerical rgb', () => {
    expect(isColorDoc({ scss, hex, rgb: 0, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a string rgb', () => {
    expect(isColorDoc({ scss, hex, rgb: '0, 136, 0', cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with an array rgb', () => {
    expect(isColorDoc({ scss, hex, rgb: [0, 136, 0], cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with an empty object rgb', () => {
    expect(isColorDoc({ scss, hex, rgb: {}, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with an incorrectly formatted rgb', () => {
    expect(isColorDoc({ scss, hex, rgb: { red: 0, blue: 136, green: 0 }, cmyk, hsl, hsv })).to.equal(false)
  })

  it('rejects objects no cmyk', () => {
    expect(isColorDoc({ scss, hex, rgb, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with an undefined cmyk', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk: undefined, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a null cmyk', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk: null, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a function cmyk', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk: () => {}, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a true cmyk', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk: true, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a false cmyk', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk: false, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a numerical cmyk', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk: 0, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with a string cmyk', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk: '100, 0, 100, 47', hsl, hsv })).to.equal(false)
  })

  it('rejects objects with an array cmyk', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk: [100, 0, 100, 47], hsl, hsv })).to.equal(false)
  })

  it('rejects objects with an empty object cmyk', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk: {}, hsl, hsv })).to.equal(false)
  })

  it('rejects objects with an incorrectly formatted cmyk', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk: { cyan: 100, magenta: 0, yellow: 100, black: 47 }, hsl, hsv })).to.equal(false)
  })

  it('rejects objects no hsl', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsv })).to.equal(false)
  })

  it('rejects objects with an undefined hsl', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl: undefined, hsv })).to.equal(false)
  })

  it('rejects objects with a null hsl', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl: null, hsv })).to.equal(false)
  })

  it('rejects objects with a function hsl', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl: () => {}, hsv })).to.equal(false)
  })

  it('rejects objects with a true hsl', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl: true, hsv })).to.equal(false)
  })

  it('rejects objects with a false hsl', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl: false, hsv })).to.equal(false)
  })

  it('rejects objects with a numerical hsl', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl: 0, hsv })).to.equal(false)
  })

  it('rejects objects with a string hsl', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl: '120, 100, 26.7', hsv })).to.equal(false)
  })

  it('rejects objects with an array hsl', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl: [120, 100, 26.7], hsv })).to.equal(false)
  })

  it('rejects objects with an empty object hsl', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl: {}, hsv })).to.equal(false)
  })

  it('rejects objects with an incorrectly formatted hsl', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl: { hue: 120, saturation: 100, lightness: 26.7 }, hsv })).to.equal(false)
  })

  it('rejects objects no hsv', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl })).to.equal(false)
  })

  it('rejects objects with an undefined hsv', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl, hsv: undefined })).to.equal(false)
  })

  it('rejects objects with a null hsv', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl, hsv: null })).to.equal(false)
  })

  it('rejects objects with a function hsv', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl, hsv: () => {} })).to.equal(false)
  })

  it('rejects objects with a true hsv', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl, hsv: true })).to.equal(false)
  })

  it('rejects objects with a false hsv', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl, hsv: false })).to.equal(false)
  })

  it('rejects objects with a numerical hsv', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl, hsv: 0 })).to.equal(false)
  })

  it('rejects objects with a string hsv', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl, hsv: '120, 100, 53.3' })).to.equal(false)
  })

  it('rejects objects with an array hsv', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl, hsv: [120, 100, 53.3] })).to.equal(false)
  })

  it('rejects objects with an empty object hsv', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl, hsv: {} })).to.equal(false)
  })

  it('rejects objects with an incorrectly formatted hsv', () => {
    expect(isColorDoc({ scss, hex, rgb, cmyk, hsl, hsv: { hue: 120, saturation: 100, value: 53.3 } })).to.equal(false)
  })
})
