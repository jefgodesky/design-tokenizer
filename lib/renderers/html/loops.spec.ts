import { expect } from 'chai'
import getDictionary from '../docs/dictionary.js'
import renderLoops from './loops.js'
import DerefTokenList from '../../types/deref-token-list'

describe('renderLoops', () => {
  const list: DerefTokenList = {
    'color.black': { $type: 'color', $value: '#000000', $description: 'Black', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: 'modules/_colors.scss', module: 'colors', variable: 'black' } } } },
    'color.white': { $type: 'color', $value: '#ffffff', $description: 'White', $extensions: { 'com.npmjs.package.design-tokenizer': { scss: { file: 'modules/_colors.scss', module: 'colors', variable: 'white' } } } }
  }

  const dict = getDictionary(list)

  it('renders loops in HTML', () => {
    const orig = '<!DOCTYPE html><html><head><title>Example</title></head><body><h1>Example</h1><table><thead><tr><th>Color</th><th>SCSS</th></tr></thead><tbody>{{ for color.* }}<tr><td>{{ description }}</td><td>{{ scss }}</td></tr>{{ endfor }}</tbody></table><ul>{{ for color.* }}<li>{{ hex }}</li>{{ endfor }}</ul></body></html>'
    const actual = renderLoops(list, dict, orig)
    const expected = '<!DOCTYPE html><html><head><title>Example</title></head><body><h1>Example</h1><table><thead><tr><th>Color</th><th>SCSS</th></tr></thead><tbody><tr><td>Black</td><td>colors.$black</td></tr><tr><td>White</td><td>colors.$white</td></tr></tbody></table><ul><li>#000000</li><li>#ffffff</li></ul></body></html>'
    expect(actual).to.equal(expected)
  })
})
