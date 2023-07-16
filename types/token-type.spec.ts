import { expect } from 'chai'
import TokenType from './token-type.js'

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
