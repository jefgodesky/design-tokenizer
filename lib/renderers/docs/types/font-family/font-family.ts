const getFontFamily = (family: string | string[]): string => typeof family === 'string' ? family : family.join(', ')

export default getFontFamily
