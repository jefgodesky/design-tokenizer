const tokenTypes = ['border', 'color', 'cubicBezier', 'dimension', 'duration',
  'fontFamily', 'fontWeight', 'gradient', 'number', 'shadow', 'strokeStyle',
  'transition', 'typography']

type TokenType = typeof tokenTypes[number]

const isTokenType = (obj: any): boolean => tokenTypes.includes(obj)

export default TokenType
export { isTokenType, tokenTypes }
