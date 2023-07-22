import StrokeStyleString from '../../../../types/basic/stroke-style.js'
import DerefStrokeStyleObject from '../../../../types/composite/dereferenced/stroke-style.js'

const getDashArray = (style: DerefStrokeStyleObject | StrokeStyleString): string => {
  return typeof style === 'string' ? style : `${style.dashArray.join(', ')}`
}

export default getDashArray
