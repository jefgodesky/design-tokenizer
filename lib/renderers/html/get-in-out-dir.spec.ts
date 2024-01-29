import { expect } from 'chai'
import esmock from 'esmock'
import { fs as memfs, vol } from 'memfs'

describe('getInOutDir', () => {
  let getInOutDir: Function

  beforeEach(async () => {
    memfs.mkdirSync('/html/src', { recursive: true })
    memfs.mkdirSync('/html/dist', { recursive: true })
    getInOutDir = await esmock('./get-in-out-dir.js', {
      fs: memfs
    })
  })

  afterEach(() => { vol.reset() })

  it('joins the base provided', () => {
    const { indir, outdir } = getInOutDir('src', 'dist', '/html')
    expect(indir).to.equal('/html/src')
    expect(outdir).to.equal('/html/dist')
  })

  it('throws an error if the input directory does not exist', () => {
    const expected = 'html: Error producing HTML: input directory /html/input does not exist.'
    expect(() => getInOutDir('input', 'dist', '/html')).to.throw(expected)
  })

  it('throws an error if the output directory does not exist', () => {
    const expected = 'html: Error producing HTML: output directory /html/output does not exist.'
    expect(() => getInOutDir('src', 'output', '/html')).to.throw(expected)
  })
})
