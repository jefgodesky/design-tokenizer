import { expect } from 'chai'
import DerefTokenList from '../../types/deref-token-list.js'
import getFiles from './get-files.js'

describe('getFiles', () => {
  it('returns an array of files mentioned', () => {
    const list: DerefTokenList = {
      'color.green': { $type: 'color', $value: '#008800', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: '_colors.scss', variable: '$green' } } } },
      'color.black': { $type: 'color', $value: '#000000', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: '_colors.scss', variable: '$black' } } } },
      'spacing.vertical': { $type: 'dimension', $value: '1rem', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: '_spacing.scss', variable: '$vertical' } } } }
    }
    expect(getFiles(list).join(' ')).to.equal('_colors.scss _spacing.scss')
  })
})
