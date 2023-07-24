import { expect } from 'chai'
import DerefTransitionToken from '../../../../types/tokens/dereferenced/transition.js'
import addTransitionToDictionary from './dictionary.js'

describe('addTransitionToDictionary', () => {
  const before = {}
  const token: DerefTransitionToken = { $type: 'transition', $value: { duration: '200ms', delay: '0ms', timingFunction: [0, 0, 0, 0] } }

  it('doesn\'t have a description if the token doesn\'t', () => {
    const actual = addTransitionToDictionary('transition.quick', token, before)
    expect(actual['transition.quick.description']).to.equal(undefined)
  })

  it('adds the description to the dictionary', () => {
    const described = { ...token, $description: 'Quick Transition' }
    const actual = addTransitionToDictionary('transition.quick', described, before)
    expect(actual['transition.quick.description']).to.equal('Quick Transition')
  })

  it('adds the duration to the dictionary', () => {
    const actual = addTransitionToDictionary('transition.quick', token, before)
    expect(actual['transition.quick.duration']).to.equal('200ms')
  })

  it('adds the delay to the dictionary', () => {
    const actual = addTransitionToDictionary('transition.quick', token, before)
    expect(actual['transition.quick.delay']).to.equal('0ms')
  })

  it('adds the timing function to the dictionary', () => {
    const actual = addTransitionToDictionary('transition.quick', token, before)
    expect(actual['transition.quick.timing']).to.equal('0, 0, 0, 0')
  })

  it('adds a link to cubic-bezier.com with the timing function to the dictionary', () => {
    const actual = addTransitionToDictionary('transition.quick', token, before)
    expect(actual['transition.quick.timing.url']).to.equal('https://cubic-bezier.com/#0,0,0,0')
  })

  it('doesn\'t add an SCSS variable unless there is one', () => {
    const actual = addTransitionToDictionary('transition.quick', token, before)
    expect(actual['transition.quick.scss']).to.equal(undefined)
  })

  it('adds an SCSS variable if there is one', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_transitions.scss', variable: 'quick' }
        }
      }
    }

    const actual = addTransitionToDictionary('transition.quick', sassy, before)
    expect(actual['transition.quick.scss']).to.equal('$quick')
  })

  it('incorporates modules into SCSS variable', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_transitions.scss', module: 'transitions', variable: 'quick' }
        }
      }
    }

    const actual = addTransitionToDictionary('transition.quick', sassy, before)
    expect(actual['transition.quick.scss']).to.equal('transitions.$quick')
  })
})
