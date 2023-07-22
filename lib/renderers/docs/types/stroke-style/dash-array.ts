import DerefStrokeStyleObject from '../../../../types/composite/dereferenced/stroke-style.js'

const getDashArray = (style: DerefStrokeStyleObject): string => `${style.dashArray.join(', ')}`

export default getDashArray
