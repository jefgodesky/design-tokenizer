import { expect } from 'chai'
import TokenType, { getTokenTypes } from './token-type.js'

describe('TokenType', () => {
  it('includes color', () => {
    expect(TokenType.color).to.equal('color')
  })

  it('includes dimension', () => {
    expect(TokenType.dimension).to.equal('dimension')
  })

  it('includes duration', () => {
    expect(TokenType.duration).to.equal('duration')
  })

  it('includes font family', () => {
    expect(TokenType.font.family).to.equal('fontFamily')
  })

  it('includes font weight', () => {
    expect(TokenType.font.weight).to.equal('fontWeight')
  })

  it('includes cubic bezier', () => {
    expect(TokenType.cubicBezier).to.equal('cubicBezier')
  })

  it('includes number', () => {
    expect(TokenType.number).to.equal('number')
  })

  it('includes strokeStyle', () => {
    expect(TokenType.strokeStyle).to.equal('strokeStyle')
  })

  it('includes border', () => {
    expect(TokenType.border).to.equal('border')
  })

  it('includes transition', () => {
    expect(TokenType.transition).to.equal('transition')
  })

  it('includes shadow', () => {
    expect(TokenType.shadow).to.equal('shadow')
  })

  it('includes gradient', () => {
    expect(TokenType.gradient).to.equal('gradient')
  })

  it('includes typography', () => {
    expect(TokenType.typography).to.equal('typography')
  })
})

describe('getTokenTypes', () => {
  it('returns an array that includes the string "color"', () => {
    expect(getTokenTypes()).to.include('color')
  })

  it('returns an array that includes the string "dimension"', () => {
    expect(getTokenTypes()).to.include('dimension')
  })

  it('returns an array that includes the string "duration"', () => {
    expect(getTokenTypes()).to.include('duration')
  })

  it('returns an array that includes the string "fontFamily"', () => {
    expect(getTokenTypes()).to.include('fontFamily')
  })

  it('returns an array that includes the string "fontWeight"', () => {
    expect(getTokenTypes()).to.include('fontWeight')
  })

  it('returns an array that includes the string "cubicBezier"', () => {
    expect(getTokenTypes()).to.include('cubicBezier')
  })

  it('returns an array that includes the string "number"', () => {
    expect(getTokenTypes()).to.include('number')
  })

  it('returns an array that includes the string "strokeStyle"', () => {
    expect(getTokenTypes()).to.include('strokeStyle')
  })

  it('returns an array that includes the string "border"', () => {
    expect(getTokenTypes()).to.include('border')
  })

  it('returns an array that includes the string "transition"', () => {
    expect(getTokenTypes()).to.include('transition')
  })

  it('returns an array that includes the string "shadow"', () => {
    expect(getTokenTypes()).to.include('shadow')
  })

  it('returns an array that includes the string "gradient"', () => {
    expect(getTokenTypes()).to.include('gradient')
  })

  it('returns an array that includes the string "typography"', () => {
    expect(getTokenTypes()).to.include('typography')
  })

  it('returns an array with no other values', () => {
    expect(getTokenTypes()).to.have.length(13)
  })
})
