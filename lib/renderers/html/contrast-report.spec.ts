import { expect } from 'chai'
import DerefTokenList from '../../types/deref-token-list.js'
import getContrastReport from './contrast-report.js'

describe('getContrastReport', () => {
  it('will create a report for everything', () => {
    const list: DerefTokenList = {
      'color.black': { $type: 'color', $value: '#000000', $description: 'Black' },
      'color.white': { $type: 'color', $value: '#ffffff', $description: 'White' }
    }
    const actual = getContrastReport(list)
    expect(actual).to.equal('<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aa pass">AA</th><td class="m aa pass">Pass</td><th class="lg aa pass">AA</th><td class="lg aa pass">Pass</td></tr><tr><th class="m aaa pass">AAA</th><td class="m aaa pass">Pass</td><th class="lg aaa pass">AAA</th><td class="lg aaa pass">Pass</td></tr></tbody></table></section></section>')
  })

  it('can be constrained to a specific rating', () => {
    const list: DerefTokenList = {
      'color.black': { $type: 'color', $value: '#000000', $description: 'Black' },
      'color.white': { $type: 'color', $value: '#444444', $description: 'Dark Gray' }
    }
    const actual = getContrastReport(list, { large: 'aa' })
    expect(actual).to.equal('')
  })
})
