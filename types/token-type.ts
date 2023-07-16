const TokenType = {
  border: 'border',
  color: 'color',
  cubicBezier: 'cubicBezier',
  dimension: 'dimension',
  duration: 'duration',
  font: {
    family: 'fontFamily',
    weight: 'fontWeight'
  },
  gradient: 'gradient',
  number: 'number',
  shadow: 'shadow',
  strokeStyle: 'strokeStyle',
  transition: 'transition',
  typography: 'typography'
} as const

const getTokenTypes = (obj: { [key: string]: any } = TokenType): string[] => {
  return Object.values(obj).flatMap(val => typeof val === 'string' ? val : getTokenTypes(val))
}

export default TokenType
export { getTokenTypes }
