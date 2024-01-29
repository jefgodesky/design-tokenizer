import DerefTokenList from '../../types/deref-token-list.js'
import Dictionary from '../../types/dictionary.js'
import getContrastReport from './contrast-report.js'

const addContrastReportToDict = (dict: Dictionary, list: DerefTokenList): Dictionary => {
  dict['color-contrast'] = getContrastReport(list)
  dict['color-contrast.skip-aa'] = getContrastReport(list, { normal: 'aa' }, ['aa'])
  dict['color-contrast.skip-aaa'] = getContrastReport(list, { normal: 'aa' }, ['aaa'])
  dict['color-contrast.skip-table'] = getContrastReport(list, { normal: 'aa' }, ['aa', 'aaa'])
  dict['color-contrast.normal.aa'] = getContrastReport(list, { normal: 'aa' })
  dict['color-contrast.normal.aa.skip-aa'] = getContrastReport(list, { normal: 'aa' }, ['aa'])
  dict['color-contrast.normal.aa.skip-aaa'] = getContrastReport(list, { normal: 'aa' }, ['aaa'])
  dict['color-contrast.normal.aa.skip-table'] = getContrastReport(list, { normal: 'aa' }, ['aa', 'aaa'])
  dict['color-contrast.normal.aaa'] = getContrastReport(list, { normal: 'aaa' })
  dict['color-contrast.normal.aaa.skip-aa'] = getContrastReport(list, { normal: 'aaa' }, ['aa'])
  dict['color-contrast.normal.aaa.skip-aaa'] = getContrastReport(list, { normal: 'aaa' }, ['aaa'])
  dict['color-contrast.normal.aaa.skip-table'] = getContrastReport(list, { normal: 'aaa' }, ['aa', 'aaa'])
  dict['color-contrast.large.aa'] = getContrastReport(list, { large: 'aa' })
  dict['color-contrast.large.aa.skip-aa'] = getContrastReport(list, { large: 'aa' }, ['aa'])
  dict['color-contrast.large.aa.skip-aaa'] = getContrastReport(list, { large: 'aa' }, ['aaa'])
  dict['color-contrast.large.aa.skip-table'] = getContrastReport(list, { large: 'aa' }, ['aa', 'aaa'])
  dict['color-contrast.large.aaa'] = getContrastReport(list, { large: 'aaa' })
  dict['color-contrast.large.aaa.skip-aa'] = getContrastReport(list, { large: 'aaa' }, ['aa'])
  dict['color-contrast.large.aaa.skip-aaa'] = getContrastReport(list, { large: 'aaa' }, ['aaa'])
  dict['color-contrast.large.aaa.skip-table'] = getContrastReport(list, { large: 'aaa' }, ['aa', 'aaa'])
  return dict
}

export default addContrastReportToDict
