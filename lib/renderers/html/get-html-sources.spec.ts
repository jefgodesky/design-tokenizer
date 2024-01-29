import { expect } from 'chai'
import esmock from 'esmock'
import { fs as memfs, vol } from 'memfs'

describe('getHTMLSources', () => {
  let getHTMLSources: Function

  beforeEach(async () => {
    vol.fromJSON({
      '/html/src/index.html': '<!DOCTYPE html><html><head><title>Test</title></head><body>{{ color.green.hex }}</body></html>',
      '/html/src/red-herring.txt': 'This is not an HTML file. This is a plain text ASCII file, so it should not be included.',
      '/html/src/colors/swatches.html': '<!DOCTYPE html><html><head><title>Swatches Test</title><body><h1>Primary Colors</h1>{{ swatches.color.primary }}<h1>Secondary Colors</h1>{{ swatches.color.secondary }}</body></head></html>'
    })
    getHTMLSources = await esmock('./get-html-sources.js', {
      fs: memfs
    })
  })

  afterEach(() => { vol.reset() })

  it('gets all HTML files in the input directory (recursively)', () => {
    const files = getHTMLSources('/html/src')
    expect(files).to.deep.equal(['/html/src/index.html', '/html/src/colors/swatches.html'])
  })
})
