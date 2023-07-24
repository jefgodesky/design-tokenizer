import { expect } from 'chai'
import DerefDurationToken from '../../../../types/tokens/dereferenced/duration.js'
import addDurationTokenToDictionary from './dictionary.js'

describe('addDurationTokenToDictionary', () => {
  const before = {}
  const token: DerefDurationToken = { $type: 'duration', $value: '1000ms' }

  it('doesn\'t have a description if the token doesn\'t', () => {
    const actual = addDurationTokenToDictionary('duration.mid', token, before)
    expect(actual['duration.mid.description']).to.equal(undefined)
  })

  it('adds the description to the dictionary', () => {
    const described = { ...token, $description: 'One second' }
    const actual = addDurationTokenToDictionary('duration.mid', described, before)
    expect(actual['duration.mid.description']).to.equal('One second')
  })

  it('adds the duration to the dictionary', () => {
    const actual = addDurationTokenToDictionary('duration.mid', token, before)
    expect(actual['duration.mid']).to.equal('1000ms')
  })

  it('doesn\'t add an SCSS variable unless there is one', () => {
    const actual = addDurationTokenToDictionary('duration.mid', token, before)
    expect(actual['duration.mid.scss']).to.equal(undefined)
  })

  it('adds an SCSS variable if there is one', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_durations.scss', variable: 'mid' }
        }
      }
    }

    const actual = addDurationTokenToDictionary('duration.mid', sassy, before)
    expect(actual['duration.mid.scss']).to.equal('$mid')
  })

  it('incorporates modules into SCSS variable', () => {
    const sassy = {
      ...token,
      $extensions: {
        'com.npmjs.package.design-tokenizer': {
          scss: { file: '_durations.scss', module: 'duration', variable: 'mid' }
        }
      }
    }

    const actual = addDurationTokenToDictionary('duration.mid', sassy, before)
    expect(actual['duration.mid.scss']).to.equal('duration.$mid')
  })
})
