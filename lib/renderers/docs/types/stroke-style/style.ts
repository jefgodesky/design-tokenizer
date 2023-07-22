import StrokeStyleString from '../../../../types/basic/stroke-style.js'
import DerefStrokeStyleObject from '../../../../types/composite/dereferenced/stroke-style.js'

const getStyle = (style: DerefStrokeStyleObject | StrokeStyleString): string => {
  return typeof style === 'string' ? style : 'dashed'
}

export default getStyle
