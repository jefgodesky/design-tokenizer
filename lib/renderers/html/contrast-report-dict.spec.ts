import { expect } from 'chai'
import DerefTokenList from '../../types/deref-token-list.js'
import getDictionary from '../docs/dictionary.js'
import addContrastReportToDict from './contrast-report-dict.js'

describe('addContrastReportToDict', () => {
  const expected: { [key: string]: string } = {
    'color-contrast': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aa pass">AA</th><td class="m aa pass">Pass</td><th class="lg aa pass">AA</th><td class="lg aa pass">Pass</td></tr><tr><th class="m aaa pass">AAA</th><td class="m aaa pass">Pass</td><th class="lg aaa pass">AAA</th><td class="lg aaa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.skip-aa': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aaa pass">AAA</th><td class="m aaa pass">Pass</td><th class="lg aaa pass">AAA</th><td class="lg aaa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.skip-aaa': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aa pass">AA</th><td class="m aa pass">Pass</td><th class="lg aa pass">AA</th><td class="lg aa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.skip-table': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div></section></section>',
    'color-contrast.normal.aa': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aa pass">AA</th><td class="m aa pass">Pass</td><th class="lg aa pass">AA</th><td class="lg aa pass">Pass</td></tr><tr><th class="m aaa pass">AAA</th><td class="m aaa pass">Pass</td><th class="lg aaa pass">AAA</th><td class="lg aaa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.normal.aa.skip-aa': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aaa pass">AAA</th><td class="m aaa pass">Pass</td><th class="lg aaa pass">AAA</th><td class="lg aaa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.normal.aa.skip-aaa': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aa pass">AA</th><td class="m aa pass">Pass</td><th class="lg aa pass">AA</th><td class="lg aa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.normal.aa.skip-table': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div></section></section>',
    'color-contrast.normal.aaa': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aa pass">AA</th><td class="m aa pass">Pass</td><th class="lg aa pass">AA</th><td class="lg aa pass">Pass</td></tr><tr><th class="m aaa pass">AAA</th><td class="m aaa pass">Pass</td><th class="lg aaa pass">AAA</th><td class="lg aaa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.normal.aaa.skip-aa': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aaa pass">AAA</th><td class="m aaa pass">Pass</td><th class="lg aaa pass">AAA</th><td class="lg aaa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.normal.aaa.skip-aaa': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aa pass">AA</th><td class="m aa pass">Pass</td><th class="lg aa pass">AA</th><td class="lg aa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.normal.aaa.skip-table': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div></section></section>',
    'color-contrast.large.aa': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aa pass">AA</th><td class="m aa pass">Pass</td><th class="lg aa pass">AA</th><td class="lg aa pass">Pass</td></tr><tr><th class="m aaa pass">AAA</th><td class="m aaa pass">Pass</td><th class="lg aaa pass">AAA</th><td class="lg aaa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.large.aa.skip-aa': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aaa pass">AAA</th><td class="m aaa pass">Pass</td><th class="lg aaa pass">AAA</th><td class="lg aaa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.large.aa.skip-aaa': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aa pass">AA</th><td class="m aa pass">Pass</td><th class="lg aa pass">AA</th><td class="lg aa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.large.aa.skip-table': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div></section></section>',
    'color-contrast.large.aaa': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aa pass">AA</th><td class="m aa pass">Pass</td><th class="lg aa pass">AA</th><td class="lg aa pass">Pass</td></tr><tr><th class="m aaa pass">AAA</th><td class="m aaa pass">Pass</td><th class="lg aaa pass">AAA</th><td class="lg aaa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.large.aaa.skip-aa': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aaa pass">AAA</th><td class="m aaa pass">Pass</td><th class="lg aaa pass">AAA</th><td class="lg aaa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.large.aaa.skip-aaa': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div><table><thead><tr><th class="m" colspan="2">Normal Text</th><th class="lg" colspan="2">Large Text</th></tr></thead><tbody><tr><th class="m aa pass">AA</th><td class="m aa pass">Pass</td><th class="lg aa pass">AA</th><td class="lg aa pass">Pass</td></tr></tbody></table></section></section>',
    'color-contrast.large.aaa.skip-table': '<section class="contrast-reports"><section class="contrast-report maa maaa lgaa lgaaa"><h4>Black &amp; White</h4><div class="example" style="background-color: #000000; color: #ffffff;">Lorem ipsum dolor sit amet&hellip;</div><div class="example" style="background-color: #ffffff; color: #000000;">Lorem ipsum dolor sit amet&hellip;</div></section></section>'
  }

  it('will add a number of contrast reports to the dictionary', () => {
    const list: DerefTokenList = {
      'color.black': { $type: 'color', $value: '#000000', $description: 'Black' },
      'color.white': { $type: 'color', $value: '#ffffff', $description: 'White' }
    }
    const before = getDictionary(list)
    const after = addContrastReportToDict(before, list)
    for (const report in expected) {
      expect(after[report]).to.equal(expected[report])
    }
  })
})
