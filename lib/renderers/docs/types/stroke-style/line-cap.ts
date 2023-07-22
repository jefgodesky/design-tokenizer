import DerefStrokeStyleObject from '../../../../types/composite/dereferenced/stroke-style.js'

const getLineCap = (style: DerefStrokeStyleObject): string => `${style.lineCap}`

export default getLineCap
